<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        ResourceTest.php
 * Description:      See the project README.md
 *
 * Founders:
 *      Cayetano H. Osma    <moesis@gmail.com>
 *
 * Copyright (C) 2024 Cayetano H. Osma
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. You can read the licence itself at
 * <https://www.gnu.org/licenses/quick-guide-gplv3.html>.
 ********************************************************************************/

namespace Tests\Unit;

use App\classes\Resource;
use App\constants\Constants;
use App\exceptions\FileCannotBeAccessibleException;
use App\exceptions\InvalidMimeTypeException;
use Faker\Factory as Faker;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use InvalidArgumentException;
use ReflectionClass;
use Tests\TestCase;

class ResourceTest extends TestCase
{
    private const string FILE_PATH = 'storage/framework/testing/disks/local/testing/testing_image.png';
    private const string PATH = 'storage/framework/testing/disks/local/testing';

    /**
     * Preparing the environment for tests
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    protected function setUp(): void
    {
        parent::setUp();
        Storage::fake('local');
        $filename = UploadedFile::fake()
            ->image('testing-image.png', 400, 400)
            ->storeAs('testing', 'testing_image.png');
        $oldMask = umask(0);
        chmod(self::PATH, 0775);
        chmod(self::FILE_PATH, 0775);
        umask($oldMask);
    }

    /**
     * Custom teardown to delete the file.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    protected function tearDown(): void
    {
        unlink(self::FILE_PATH);
        rmdir(self::PATH);

        parent::tearDown();
    }

    /**
     * Test the creation of a resource
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileNotFoundException
     */
    public function test_constructor_with_correct_params()
    {
        $resource = new Resource(self::FILE_PATH);
        $this->assertNotNull($resource);
        $this->assertInstanceOf(Resource::class, $resource);
        $this->assertEquals($resource->getFilename(), self::FILE_PATH);
        $this->assertEquals(1, $resource->getWidth());
        $this->assertEquals(1, $resource->getHeight());
        $this->assertNotEmpty($resource->getHash());

        $resource->setWidth(100);
        $this->assertEquals(100, $resource->getWidth());
        $resource->setHeight(100);
        $this->assertEquals(100, $resource->getHeight());

    }

    /**
     * Test the exception when the file does not exist
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileNotFoundException
     */
    public function test_constructor_with_non_existing_file()
    {
        $faker = Faker::create();
        $fullFilename = sprintf(
            '%s%s%s',
            storage_path(self::FILE_PATH),
            DIRECTORY_SEPARATOR,
            $faker->name());
        $this->expectException(FileNotFoundException::class);
        $resource = new Resource($fullFilename);
    }

    /**
     * Test a inaccessible resource.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileCannotBeAccessibleException
     */
    public function test_constructor_with_non_accessible_file()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $this->assertTrue(chmod(self::FILE_PATH, 600));
        $this->expectException(FileCannotBeAccessibleException::class);
        $resource = new Resource(self::FILE_PATH);
    }

    /**
     * Test if the hash is calculated correctly
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileNotFoundException
     */
    public function test_set_hash_to_an_existing_file()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);
        $hash = hash_file('sha256', self::FILE_PATH, Constants::BINARY_FILE);
        $this->assertEquals($resource->createHash()->getHash(), $hash);
    }

    /**
     * Test the mimetype of an existing file if the new mimetype match the file type
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileNotFoundException
     */
    public function test_mimetype_of_filename()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);
        $this->assertEquals($resource->getType(), 'image/png');
    }

    /**
     * Test an exception when you try to set a non matching mimetype with the file
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws InvalidMimeTypeException
     */
    public function test_exception_change_unmatch_mimetype()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);
        $this->expectException(InvalidMimeTypeException::class);
        $resource->setType('image/gif');
    }

    /**
     * Test an exception when you try to set an invalid mimetype
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws InvalidMimeTypeException
     */
    public function test_exception_change_wrong_mimetype()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);
        $this->expectException(InvalidArgumentException::class);
        $resource->setType('image/xxx');
    }

    /**
     * Test when you change the mimetype to the appropriate one.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws InvalidMimeTypeException
     */
    public function test_exception_change_the_mimetype()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);
        $resource->setType('image/png');
        $this->assertEquals($resource->getType(), 'image/png');
    }

    /**
     * Test to get the allowed mimetypes in JSON format
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_get_allowed_mimetypes_array()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);

        $this->assertEquals('string', gettype($resource->getAllowedMimetypes()));
        $this->assertJson($resource->getAllowedMimetypes());
    }

    /**
     * Test to get the mimetype extension for the loaded file
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_get_mimetype_extensions()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);

        $this->assertEquals('array', gettype($resource->getTypeExtensions()));
        $this->assertEquals('png', $resource->getTypeExtensions()[0]);
    }

    /**
     * Test to get tan exception when type is empty
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_get_exception_when_type_is_empty()
    {
        $this->assertTrue(file_exists(self::FILE_PATH));
        $resource = new Resource(self::FILE_PATH);

        // Use reflection to force an impossible situation, but need to cover
        // the exception
        $reflection = new ReflectionClass(Resource::class);
        $reflection->getProperty('type')->setvalue($resource, '');

        $this->expectException(InvalidArgumentException::class);
        $resource->getTypeExtensions();
    }
}


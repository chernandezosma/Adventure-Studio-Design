<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        SoundTest.php
 * Description:     See the project README.md
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
use App\classes\Sound;
use App\constants\Constants;
use App\exceptions\FileCannotBeAccessibleException;
use App\exceptions\InvalidMimeTypeException;
use Faker\Factory as Faker;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Storage;
use InvalidArgumentException;
use ReflectionClass;
use Tests\TestCase;

use function PHPUnit\Framework\assertEquals;

class SoundTest extends TestCase
{
    private const string TESTING_SOUND_NAME = 'sound-name';
    private const string TESTING_FILENAME = 'testing_sound.mp3';
    private const string TESTING_PATH = 'testing';
    private const string TESTING_FULL_FILE_PATH = self::TESTING_PATH.DIRECTORY_SEPARATOR.self::TESTING_FILENAME;

    private const int TESTING_FILE_LENGTH = 10;

    private string $fullFilenamePath;

    protected function setUp(): void
    {
        parent::setUp();
        $fileContent = Storage::disk('local')->get('testing/'.self::TESTING_FILENAME);

        $oldMask = umask(0);
        $path = Storage::fake('local')->path('');
        chmod($path, 0775);

        $result = Storage::fake('local')->put(
            self::TESTING_FILENAME,
            $fileContent
        );

        chmod($path . 'testing_sound.mp3', 0775);
        umask($oldMask);

        $this->fullFilenamePath = Storage::path(self::TESTING_FILENAME);
    }

    /**
     * Test the creation of a resource
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     */
    public function test_constructor_with_correct_params()
    {
        // $filepath = Storage::disk('local')->path(self::TESTING_FULL_FILE_PATH);

        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);

        $this->assertNotNull($resource);
        $this->assertInstanceOf(Resource::class, $resource);
        $this->assertEquals($this->fullFilenamePath, $resource->getFilename());
        $this->assertNotEmpty($resource->getHash());
        $this->assertEquals(Constants::MINIMUM_LENGTH_SIZE, $resource->getLength());

        $resource->setLength(self::TESTING_FILE_LENGTH);
        $this->assertEquals(self::TESTING_FILE_LENGTH, $resource->getLength());
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
     * @throws FileCannotBeAccessibleException
     */
    public function test_constructor_with_non_existing_file()
    {
        $faker = Faker::create();
        $fullFilename = sprintf(
            '%s%s%s',
            storage_path(self::TESTING_FULL_FILE_PATH),
            DIRECTORY_SEPARATOR,
            $faker->name()
        );
        $this->expectException(FileNotFoundException::class);
        new Sound(self::TESTING_SOUND_NAME, $fullFilename);
    }

    /**
     * Test a inaccessible resource.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileNotFoundException
     */
    public function test_constructor_with_non_accessible_file()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);
        $this->assertTrue(chmod($this->fullFilenamePath, 600));
        $this->expectException(FileCannotBeAccessibleException::class);
        new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);
    }

    /**
     * Test if the hash is calculated correctly
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     */
    public function test_set_hash_to_an_existing_file()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);

        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);
        $hash = hash_file('sha256', $this->fullFilenamePath, Constants::BINARY_FILE);
        $this->assertEquals($resource->createHash()->getHash(), $hash);
    }

    /**
     * Test the mimetype of an existing file if the new mimetype match the file type
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     */
    public function test_mimetype_of_filename()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);

        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);
        $this->assertEquals('audio/mpeg', $resource->getType());
    }

    /**
     * Test an exception when you try to set a non matching mimetype with the file
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     * @throws InvalidMimeTypeException
     */
    public function test_exception_change_unmatch_mimetype()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);

        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);
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
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     * @throws InvalidMimeTypeException
     */
    public function test_exception_change_mimetype()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);
        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);
        $resource->setType('audio/mpeg');
        assertEquals('audio/mpeg', $resource->getType());
    }

    /**
     * Test to get the allowed mimetypes in JSON format
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     */
    public function test_get_allowed_mimetypes_array()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);

        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);
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
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     */
    public function test_get_mimetype_extensions()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);
        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);

        $this->assertEquals('array', gettype($resource->getTypeExtensions()));
        $this->assertContains('mp3', array_values($resource->getTypeExtensions()));
    }

    /**
     * Test to get tan exception when type is empty
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     */
    public function test_get_exception_when_type_is_empty()
    {
        Storage::assertExists(self::TESTING_FILENAME);
        $this->assertFileExists($this->fullFilenamePath);
        $resource = new Sound(self::TESTING_SOUND_NAME, $this->fullFilenamePath);

        // Use reflection to force an impossible situation, but need to cover
        // the exception
        $reflection = new ReflectionClass(Resource::class);
        $reflection->getProperty('type')->setvalue($resource, '');

        $this->expectException(InvalidArgumentException::class);
        $resource->getTypeExtensions();
    }
}


<?php

namespace Tests\Unit;

use App\classes\Base;
use App\classes\Description;
use InvalidArgumentException;
use Ramsey\Uuid\UuidInterface;
use Tests\TestCase;
use TypeError;

class BaseTest extends TestCase
{
    private const string TEST_NAME = 'Unnamed Adventure Test';
    private const string TEST_ALTERNATIVE_NAME = 'Alternative Adventure Test';

    private const string TEST_DESCRIPTION = 'Adventure Test Description';

    /**
     * Test the call to the constructor with correct arguments
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_constructor()
    {
        $base = new Base(self::TEST_NAME);

        $this->assertNotNull($base);
        $this->assertInstanceOf(Base::class, $base);
        $this->assertInstanceOf(UuidInterface::class, $base->getUuid());
        $this->assertEquals(self::TEST_NAME, $base->getName());
    }

    /**
     * Test the call to the constructor with null value
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_constructor_with_null_name()
    {
        $this->expectException(TypeError::class);
        $base = new Base(null);
    }

    /**
     * Test the call to the constructor with empty name
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_constructor_with_empty_name()
    {
        $this->expectException(InvalidArgumentException::class);
        $base = new Base('');
    }

    /**
     * Test the construction of base object and assign new name
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_assign_name_after_constructor()
    {
        $base = new Base(self::TEST_NAME);

        $this->assertNotNull($base);
        $this->assertInstanceOf(Base::class, $base);
        $this->assertInstanceOf(UuidInterface::class, $base->getUuid());
        $this->assertEquals(self::TEST_NAME, $base->getName());

        $base->setName(self::TEST_ALTERNATIVE_NAME);
        $this->assertEquals(self::TEST_ALTERNATIVE_NAME, $base->getName());
    }

    /**
     * Test the set_name method with a null value
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_set_name_with_null_value()
    {
        $base = new Base(self::TEST_NAME);

        $this->assertNotNull($base);
        $this->assertInstanceOf(Base::class, $base);
        $this->assertInstanceOf(UuidInterface::class, $base->getUuid());
        $this->assertEquals(self::TEST_NAME, $base->getName());

        $this->expectException(TypeError::class);
        $base->setName(null);
    }

    /**
     * Test the set_name method with an empty value
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_set_name_with_empty_value()
    {
        $base = new Base(self::TEST_NAME);

        $this->assertNotNull($base);
        $this->assertInstanceOf(Base::class, $base);
        $this->assertInstanceOf(UuidInterface::class, $base->getUuid());
        $this->assertEquals(self::TEST_NAME, $base->getName());

        $this->expectException(InvalidArgumentException::class);
        $base->setName('');
    }

    /**
     * Test set_description method with all possible values
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_set_description_method()
    {
        $base = new Base(self::TEST_NAME);

        $this->assertNotNull($base);
        $this->assertInstanceOf(Base::class, $base);
        $this->assertInstanceOf(UuidInterface::class, $base->getUuid());
        $this->assertEquals(self::TEST_NAME, $base->getName());

        $description = new Description();

        $base->setDescription($description);
        $this->assertEmpty($base->getDescription()->getNormalDescription());

        $descriptionWithNormal = new Description([
            Description::NORMAL_DESCRIPTION_KEY => self::TEST_DESCRIPTION,
        ]);

        $base->setDescription($descriptionWithNormal);
        $this->assertEquals(self::TEST_DESCRIPTION, $base->getDescription()->getNormalDescription());

        $base->setDescription(null);
        $this->assertNull($base->getDescription());
    }

}

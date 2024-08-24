<?php

namespace Tests\Unit;

use App\classes\Description;
use App\classes\Item;
use App\classes\Position;
use App\constants\Constants;
use App\enums\EntityAttributes;
use App\exceptions\CalculusImpossibleException;
use Faker\Factory;
use InvalidArgumentException;
use Tests\TestCase;
use TypeError;

class ItemTest extends TestCase
{
    private const string ITEM_NAME = 'Item Name';
    private const string ITEM_DESCRIPTION = 'Item Description';

    /**
     * Test a failed constructor. I have not description.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_failed_constructor_no_name()
    {
        $this->expectException(TypeError::class);
        new Item(null, $this::ITEM_DESCRIPTION);
    }

    /**
     * Test a failed constructor. I have an empty name.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_failed_constructor_empty_name()
    {
        $this->expectException(InvalidArgumentException::class);
        new Item('', $this::ITEM_DESCRIPTION);
    }

    /**
     * Test a failed constructor. I have not description.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_failed_constructor_no_description()
    {
        $this->expectException(TypeError::class);
        new Item($this::ITEM_NAME, null);
    }

    /**
     * Test a failed constructor. I have empty description.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_failed_constructor_empty_description()
    {
        $this->expectException(InvalidArgumentException::class);
        new Item($this::ITEM_NAME, '');
    }

    /**
     * Test a normal constructor
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_constructor()
    {
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);

        $this->assertEquals($this::ITEM_NAME, $Item->getName());
        $this->assertEquals($this::ITEM_DESCRIPTION, $Item->getDescription()->getNormalDescription());
        $this->assertNotEmpty($Item->getUuid());
        $this->assertEquals(0.0, $Item->getWidth());
        $this->assertEquals(0.0, $Item->getHeight());
        $this->assertEquals(0.0, $Item->getDepth());
        $this->assertEquals(0.0, $Item->getWeight());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionX());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionY());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionZ());
        $this->assertEquals([], $Item->getAttributes());
    }

    /**
     * Test the name change with empty name. InvalidArgumentException is thrown
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_set_name_without_value()
    {
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);

        $this->assertEquals($this::ITEM_DESCRIPTION, $Item->getDescription()->getNormalDescription());
        $this->assertEquals($this::ITEM_NAME, $Item->getName());
        $this->assertEquals(0.0, $Item->getWidth());
        $this->assertEquals(0.0, $Item->getHeight());
        $this->assertEquals(0.0, $Item->getDepth());
        $this->assertEquals(0.0, $Item->getWeight());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionX());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionY());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionZ());
        $this->assertEquals([], $Item->getAttributes());

        $this->expectException(InvalidArgumentException::class);
        $Item->setName('');
    }

    /**
     * Battery tests to test the setters
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_set_name_after_the_constructor()
    {
        $faker = Factory::create();
        $name = $faker->name();

        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $this->assertEquals($this::ITEM_DESCRIPTION, $Item->getDescription()->getNormalDescription());
        $this->assertEquals($this::ITEM_NAME, $Item->getName());
        $this->assertEquals(0.0, $Item->getWidth());
        $this->assertEquals(0.0, $Item->getHeight());
        $this->assertEquals(0.0, $Item->getDepth());
        $this->assertEquals(0.0, $Item->getWeight());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionX());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionY());
        $this->assertEquals(0.0, $Item->getPosition()->getPositionZ());
        $this->assertEquals([], $Item->getAttributes());

        $Item->setName($name);
        $this->assertEquals($name, $Item->getName());

        $description = $faker->sentence();
        $descriptions = new Description([Description::NORMAL_DESCRIPTION_KEY => $description]);
        $Item->setDescription($descriptions);
        $this->assertEquals($description, $Item->getDescription()->getNormalDescription());

        $value = $faker->randomFloat();
        $Item->setWeight($value);
        $this->assertEquals($value, $Item->getWeight());

        $value = $faker->randomFloat(2, 1);
        $Item->setHeight($value);
        $this->assertEquals($value, $Item->getHeight());

        $value = $faker->randomFloat(2, 1);
        $Item->setWidth($value);
        $this->assertEquals($value, $Item->getWidth());

        $value = $faker->randomFloat();
        $Item->setDepth($value);
        $this->assertEquals($value, $Item->getDepth());
        $Item->setDepth(0);
        $this->assertEquals(0, $Item->getDepth());

        $postition = new Position(0, 0, 0);
        $Item->setPosition($postition);
        $this->assertEquals(0, $Item->getPosition()->getPositionX());
        $this->assertEquals(0, $Item->getPosition()->getPositionY());
        $this->assertEquals(0, $Item->getPosition()->getPositionZ());

        $Item->setAttributes([]);
        $this->assertEquals([], $Item->getAttributes());
        $specialAttributes = [
            EntityAttributes::ENTITY_CONSUMABLE,
            EntityAttributes::ENTITY_RECHARGEABLE
        ];
        $Item->setAttributes($specialAttributes);
        $this->assertEquals($specialAttributes, $Item->getAttributes());
    }

    /**
     * Test the exception when trying to assign values below zero
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_weight_with_values_below_zero()
    {
        $this->expectException(InvalidArgumentException::class);
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $Item->setWeight(-1);
    }

    /**
     * Test the exception when trying to assign values below zero
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_height_with_values_below_zero()
    {
        $this->expectException(InvalidArgumentException::class);
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $Item->setHeight(-1);
    }

    /**
     * Test the exception when trying to assign values below zero
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_width_with_values_below_zero()
    {
        $this->expectException(InvalidArgumentException::class);
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $Item->setWidth(-1);
    }

    /**
     * Test the exception when trying to assign values below zero
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_depth_with_values_below_zero()
    {
        $this->expectException(InvalidArgumentException::class);
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $Item->setDepth(-1);
    }


    /**
     * Test the exception when trying to assign values equals to zero
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_height_with_values_equals_to_zero()
    {
        $this->expectException(InvalidArgumentException::class);
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $Item->setHeight(0);
    }

    /**
     * Test the exception when trying to assign values equals to zero
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_width_with_values_equals_to_zero()
    {
        $this->expectException(InvalidArgumentException::class);
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $Item->setWidth(0);
    }

    /**
     * Test the volume calculation for normalized values
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws CalculusImpossibleException
     */
    public function test_volume_with_normal_values()
    {
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);
        $Item->setWidth(10);
        $Item->setHeight(10);
        $Item->setDepth(10);
        $this->assertEquals(1000, $Item->getVolume());
    }

    /**
     * Test the volume calculation for wrong values
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     * @throws CalculusImpossibleException
     */
    public function test_volume_with_wrong_values()
    {
        $Item = new Item($this::ITEM_NAME, $this::ITEM_DESCRIPTION);

        $this->expectException(CalculusImpossibleException::class);
        $this->assertEquals(1000, $Item->getVolume());
    }
}

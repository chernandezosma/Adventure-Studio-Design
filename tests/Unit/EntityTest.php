<?php

namespace Tests\Unit;

use App\classes\Description;
use App\classes\Entity;
use App\classes\Position;
use App\constants\Constants;
use App\enums\EntityAttributes;
use App\exceptions\CalculusImpossibleException;
use ErrorException;
use Faker\Factory;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Tests\TestCase;
use TypeError;

class EntityTest extends TestCase
{
    private const string ENTITY_NAME = 'Entity Name';
    private const string ENTITY_DESCRIPTION = 'Entity Description';

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
        new Entity(null, $this::ENTITY_DESCRIPTION);
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
        new Entity('', $this::ENTITY_DESCRIPTION);
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
        new Entity($this::ENTITY_NAME, null);
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
        new Entity($this::ENTITY_NAME, '');
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);

        $this->assertEquals($this::ENTITY_NAME, $entity->getName());
        $this->assertEquals($this::ENTITY_DESCRIPTION, $entity->getDescription()->getNormalDescription());
        $this->assertNotEmpty($entity->getUuid());
        $this->assertEquals(0.0, $entity->getWidth());
        $this->assertEquals(0.0, $entity->getHeight());
        $this->assertEquals(0.0, $entity->getDepth());
        $this->assertEquals(0.0, $entity->getWeight());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionX());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionY());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionZ());
        $this->assertEquals([], $entity->getAttributes());
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);

        $this->assertEquals($this::ENTITY_DESCRIPTION, $entity->getDescription()->getNormalDescription());
        $this->assertEquals($this::ENTITY_NAME, $entity->getName());
        $this->assertEquals(0.0, $entity->getWidth());
        $this->assertEquals(0.0, $entity->getHeight());
        $this->assertEquals(0.0, $entity->getDepth());
        $this->assertEquals(0.0, $entity->getWeight());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionX());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionY());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionZ());
        $this->assertEquals([], $entity->getAttributes());

        $this->expectException(InvalidArgumentException::class);
        $entity->setName('');
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

        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $this->assertEquals($this::ENTITY_DESCRIPTION, $entity->getDescription()->getNormalDescription());
        $this->assertEquals($this::ENTITY_NAME, $entity->getName());
        $this->assertEquals(0.0, $entity->getWidth());
        $this->assertEquals(0.0, $entity->getHeight());
        $this->assertEquals(0.0, $entity->getDepth());
        $this->assertEquals(0.0, $entity->getWeight());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionX());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionY());
        $this->assertEquals(0.0, $entity->getPosition()->getPositionZ());
        $this->assertEquals([], $entity->getAttributes());

        $entity->setName($name);
        $this->assertEquals($name, $entity->getName());

        $description = $faker->sentence();
        $descriptions = new Description([Constants::NORMAL_DESCRIPTION => $description]);
        $entity->setDescription($descriptions);
        $this->assertEquals($description, $entity->getDescription()->getNormalDescription());

        $value = $faker->randomFloat();
        $entity->setWeight($value);
        $this->assertEquals($value, $entity->getWeight());

        $value = $faker->randomFloat(2, 1);
        $entity->setHeight($value);
        $this->assertEquals($value, $entity->getHeight());

        $value = $faker->randomFloat(2, 1);
        $entity->setWidth($value);
        $this->assertEquals($value, $entity->getWidth());

        $value = $faker->randomFloat();
        $entity->setDepth($value);
        $this->assertEquals($value, $entity->getDepth());
        $entity->setDepth(0);
        $this->assertEquals(0, $entity->getDepth());

        $postition = new Position(0, 0, 0);
        $entity->setPosition($postition);
        $this->assertEquals(0, $entity->getPosition()->getPositionX());
        $this->assertEquals(0, $entity->getPosition()->getPositionY());
        $this->assertEquals(0, $entity->getPosition()->getPositionZ());

        $entity->setAttributes([]);
        $this->assertEquals([], $entity->getAttributes());
        $specialAttributes = [
            EntityAttributes::ENTITY_CONSUMABLE,
            EntityAttributes::ENTITY_RECHARGEABLE
        ];
        $entity->setAttributes($specialAttributes);
        $this->assertEquals($specialAttributes, $entity->getAttributes());
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $entity->setWeight(-1);
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $entity->setHeight(-1);
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $entity->setWidth(-1);
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $entity->setDepth(-1);
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $entity->setHeight(0);
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $entity->setWidth(0);
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);
        $entity->setWidth(10);
        $entity->setHeight(10);
        $entity->setDepth(10);
        $this->assertEquals(1000, $entity->getVolume());
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
        $entity = new Entity($this::ENTITY_NAME, $this::ENTITY_DESCRIPTION);

        $this->expectException(CalculusImpossibleException::class);
        $this->assertEquals(1000, $entity->getVolume());
    }
}

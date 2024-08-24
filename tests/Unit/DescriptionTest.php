<?php

namespace Tests\Unit;

use App\constants\Constants;
use App\classes\Description;
use InvalidArgumentException;
use Tests\TestCase;
use TypeError;

class DescriptionTest extends TestCase
{
    private const array NO_NORMAL_DECRIPTION = [
        Description::NORMAL_DESCRIPTION_KEY => '',
        Description::SMELL_DESCRIPTION_KEY => 'smell description',
        Description::SOUND_DESCRIPTION_KEY => 'sound description'
    ];

    private const array ONLY_NORMAL_DESCRIPTION =
    [
        Description::NORMAL_DESCRIPTION_KEY => 'Normal description'
    ];

    private const array DESCRIPTIONS = [
        [
            Description::NORMAL_DESCRIPTION_KEY => 'Normal description',
            Description::SMELL_DESCRIPTION_KEY => 'smell description',
            Description::SOUND_DESCRIPTION_KEY => 'sound description'
        ],
        [
            Description::NORMAL_DESCRIPTION_KEY => 'Normal description2',
            Description::SMELL_DESCRIPTION_KEY => '',
            Description::SOUND_DESCRIPTION_KEY => 'sound description2'
        ],
        [
            Description::NORMAL_DESCRIPTION_KEY => 'Normal description3',
            Description::SMELL_DESCRIPTION_KEY => null,
            Description::SOUND_DESCRIPTION_KEY => 'sound description3'
        ],
        [
            Description::NORMAL_DESCRIPTION_KEY => 'Normal description4',
            Description::SMELL_DESCRIPTION_KEY => '',
            Description::SOUND_DESCRIPTION_KEY => ''
        ],
        [
            Description::NORMAL_DESCRIPTION_KEY => 'Normal description4',
            Description::SMELL_DESCRIPTION_KEY => null,
            Description::SOUND_DESCRIPTION_KEY => null
        ],
    ];

    /**
     * Test the constructor of the class with several values
     * @throws InvalidArgumentException
     */
    public function test_constructor(): void
    {
        foreach ($this::DESCRIPTIONS as $description) {
            $descriptionObject = new Description($description);
            $this->assertEquals($description[Description::NORMAL_DESCRIPTION_KEY], $descriptionObject->getNormalDescription());
            $this->assertEquals($description[Description::SMELL_DESCRIPTION_KEY], $descriptionObject->getSmellDescription());
            $this->assertEquals($description[Description::SOUND_DESCRIPTION_KEY], $descriptionObject->getSoundDescription());
        }
    }

    /**
     * @throws InvalidArgumentException
     */
    public function test_only_description_option()
    {
        $descriptionObject = new Description($this::ONLY_NORMAL_DESCRIPTION);
        $this->assertEquals($this::ONLY_NORMAL_DESCRIPTION[Description::NORMAL_DESCRIPTION_KEY], $descriptionObject->getNormalDescription());
        $this->assertEquals('', $descriptionObject->getSmellDescription());
        $this->assertEquals('', $descriptionObject->getSoundDescription());
    }

    public function test_exception_with_no_description_in_constructor()
    {
        $this->expectException(TypeError::class);
        $descriptionObject = new Description(null);
    }

    public function test_exception_with_empty_array_as_constructor_parameter()
    {
        $descriptionObject = new Description([]);
        $this->assertInstanceOf(Description::class, $descriptionObject);

        $this->assertEmpty($descriptionObject->getNormalDescription());
        $this->assertEmpty($descriptionObject->getSmellDescription());
        $this->assertEmpty($descriptionObject->getSoundDescription());
    }

    /**
     * @throws InvalidArgumentException
     */
    public function test_getters_and_setters(): void
    {
        $descriptionObject = new Description([
            Description::NORMAL_DESCRIPTION_KEY => Description::NORMAL_DESCRIPTION_KEY,
            Description::SMELL_DESCRIPTION_KEY => Description::SMELL_DESCRIPTION_KEY,
            Description::SOUND_DESCRIPTION_KEY => Description::SOUND_DESCRIPTION_KEY
        ]);
        $this->assertEquals(Description::NORMAL_DESCRIPTION_KEY, $descriptionObject->getNormalDescription());
        $this->assertEquals(Description::SMELL_DESCRIPTION_KEY, $descriptionObject->getSmellDescription());
        $this->assertEquals(Description::SOUND_DESCRIPTION_KEY, $descriptionObject->getSoundDescription());

        foreach ($this::DESCRIPTIONS as $description) {
            $descriptionObject = new Description($description);

            $descriptionObject->setNormalDescription($description[Description::NORMAL_DESCRIPTION_KEY]);
            $descriptionObject->setSmellDescription($description[Description::SMELL_DESCRIPTION_KEY]);
            $descriptionObject->setSoundDescription($description[Description::SOUND_DESCRIPTION_KEY]);

            $this->assertEquals($description[Description::NORMAL_DESCRIPTION_KEY], $descriptionObject->getNormalDescription());
            $this->assertEquals($description[Description::SMELL_DESCRIPTION_KEY], $descriptionObject->getSmellDescription());
            $this->assertEquals($description[Description::SOUND_DESCRIPTION_KEY], $descriptionObject->getSoundDescription());
        }
    }
}

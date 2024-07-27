<?php

namespace Tests\Unit;

use App\constants\Constants;
use App\classes\Description;
use InvalidArgumentException;
use Tests\TestCase;

class DescriptionTest extends TestCase
{
    private const array NO_NORMAL_DECRIPTION = [
        Constants::NORMAL_DESCRIPTION => '',
        Constants::SMELL_DESCRIPTION => 'smell description',
        Constants::SOUND_DESCRIPTION => 'sound description'
    ];

    private const array ONLY_NORMAL_DESCRIPTION =
    [
        Constants::NORMAL_DESCRIPTION => 'Normal description'
    ];

    private const array DESCRIPTIONS = [
        [
            Constants::NORMAL_DESCRIPTION => 'Normal description',
            Constants::SMELL_DESCRIPTION => 'smell description',
            Constants::SOUND_DESCRIPTION => 'sound description'
        ],
        [
            Constants::NORMAL_DESCRIPTION => 'Normal description2',
            Constants::SMELL_DESCRIPTION => '',
            Constants::SOUND_DESCRIPTION => 'sound description2'
        ],
        [
            Constants::NORMAL_DESCRIPTION => 'Normal description3',
            Constants::SMELL_DESCRIPTION => null,
            Constants::SOUND_DESCRIPTION => 'sound description3'
        ],
        [
            Constants::NORMAL_DESCRIPTION => 'Normal description4',
            Constants::SMELL_DESCRIPTION => '',
            Constants::SOUND_DESCRIPTION => ''
        ],
        [
            Constants::NORMAL_DESCRIPTION => 'Normal description4',
            Constants::SMELL_DESCRIPTION => null,
            Constants::SOUND_DESCRIPTION => null
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
            $this->assertEquals($description[Constants::NORMAL_DESCRIPTION], $descriptionObject->getNormalDescription());
            $this->assertEquals($description[Constants::SMELL_DESCRIPTION], $descriptionObject->getSmellDescription());
            $this->assertEquals($description[Constants::SOUND_DESCRIPTION], $descriptionObject->getSoundDescription());
        }
    }

    /**
     * @throws InvalidArgumentException
     */
    public function test_only_description_option()
    {
        $descriptionObject = new Description($this::ONLY_NORMAL_DESCRIPTION);
        $this->assertEquals($this::ONLY_NORMAL_DESCRIPTION[Constants::NORMAL_DESCRIPTION], $descriptionObject->getNormalDescription());
        $this->assertEquals('', $descriptionObject->getSmellDescription());
        $this->assertEquals('', $descriptionObject->getSoundDescription());
    }

    public function test_exception_with_no_description_in_constructor()
    {
        $this->expectException(InvalidArgumentException::class);
        $descriptionObject = new Description($this::NO_NORMAL_DECRIPTION);
    }

    public function test_exception_with_empty_array_as_constructor_parameter()
    {
        $this->expectException(InvalidArgumentException::class);
        $descriptionObject = new Description([]);
    }

    /**
     * @throws InvalidArgumentException
     */
    public function test_getters_and_setters(): void
    {
        $descriptionObject = new Description([
            Constants::NORMAL_DESCRIPTION => Constants::NORMAL_DESCRIPTION,
            Constants::SMELL_DESCRIPTION => Constants::SMELL_DESCRIPTION,
            Constants::SOUND_DESCRIPTION => Constants::SOUND_DESCRIPTION
        ]);
        $this->assertEquals(Constants::NORMAL_DESCRIPTION, $descriptionObject->getNormalDescription());
        $this->assertEquals(Constants::SMELL_DESCRIPTION, $descriptionObject->getSmellDescription());
        $this->assertEquals(Constants::SOUND_DESCRIPTION, $descriptionObject->getSoundDescription());

        foreach ($this::DESCRIPTIONS as $description) {
            $descriptionObject = new Description($description);

            $descriptionObject->setNormalDescription($description[Constants::NORMAL_DESCRIPTION]);
            $descriptionObject->setSmellDescription($description[Constants::SMELL_DESCRIPTION]);
            $descriptionObject->setSoundDescription($description[Constants::SOUND_DESCRIPTION]);

            $this->assertEquals($description[Constants::NORMAL_DESCRIPTION], $descriptionObject->getNormalDescription());
            $this->assertEquals($description[Constants::SMELL_DESCRIPTION], $descriptionObject->getSmellDescription());
            $this->assertEquals($description[Constants::SOUND_DESCRIPTION], $descriptionObject->getSoundDescription());
        }
    }
}

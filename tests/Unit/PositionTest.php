<?php

namespace Tests\Unit;

use App\classes\Position;
use Tests\TestCase;

class PositionTest extends TestCase
{
    private const array POSITIONS = [
        [0,0,0],
        [1,2,3],
        [-1,-2,-3],
        [10,20,30],
        [-10,-20,-30],
        [-10.5,-20.7,-30.3],
        [0.5,0.5,0.5],
    ];

    /**
     * Test the constructor of the class with several values
     */
    public function test_constructor_with_integer_parameters(): void
    {
        foreach ($this::POSITIONS as $position) {
            list($positionX, $positionY, $positionZ) = $position;
            $position = new Position($positionX, $positionY, $positionZ);
            $this->assertEquals($positionX, $position->getPositionX());
            $this->assertEquals($positionY, $position->getPositionY());
            $this->assertEquals($positionZ, $position->getPositionZ());
        }
    }

    /**
     * Test the setters and getters for the class with the same values
     * than constructor.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return void
     *
     */
    public function test_setters_for_positions(): void
    {
        foreach ($this::POSITIONS as $position) {
            list($positionX, $positionY, $positionZ) = $position;
            $position = new Position(0,0,0);
            $this->assertEquals(0, $position->getPositionX());
            $this->assertEquals(0, $position->getPositionY());
            $this->assertEquals(0, $position->getPositionZ());

            $position->setPositionX($positionX);
            $position->setPositionY($positionY);
            $position->setPositionZ($positionZ);

            $this->assertEquals($positionX, $position->getPositionX());
            $this->assertEquals($positionY, $position->getPositionY());
            $this->assertEquals($positionZ, $position->getPositionZ());
        }
    }
}

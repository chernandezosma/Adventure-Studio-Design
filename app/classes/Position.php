<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        Position.php
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

namespace App\classes;

/**
 * Class to hold the position of a particular object in the game's world
 * TODO: Function which calculate:
 *  - if the object is on a surface.
 *  - if the object is in a scene
 *  - if the object is inisde other object
 * Hint: https://mathsfromnothing.au/checking-if-a-point-is-inside-a-shape/?i=1
 *
 * @author Cayetano H. Osma <chernandez@elestadoweb.com>
 * @version Jul.2024
 *
 */
class Position
{
    /**
     * Coordinate of the object in the X axis
     *
     * @var float
     */
    protected float $positionX;

    /**
     * Coordinate of the object in the Y axis
     *
     * @var float
     */
    protected float $positionY;

    /**
     * Coordinate of the object in the Z axis
     *
     * @var float
     */
    protected float $positionZ;

    /**
     * Class constructor.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $positionX
     * @param  float  $positionY
     * @param  float  $positionZ
     *
     */
    public function __construct(float $positionX, float $positionY, float $positionZ)
    {
        $this->positionX = $positionX;
        $this->positionY = $positionY;
        $this->positionZ = $positionZ;
    }

    /**
     * Return the position X of the object
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return $this
     *
     */
    public function getPositionX(): float
    {
        return $this->positionX;
    }

    /**
     * Set the position X of the object
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $positionX
     *
     * @return $this
     *
     */
    public function setPositionX(float $positionX): Position
    {
        $this->positionX = $positionX;

        return $this;
    }

    /**
     * Return the position Y of the object
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return $this
     *
     */
    public function getPositionY(): float
    {
        return $this->positionY;
    }

    /**
     * Set the position Y of the object
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $positionY
     *
     * @return $this
     *
     */
    public function setPositionY(float $positionY): Position
    {
        $this->positionY = $positionY;

        return $this;
    }

    /**
     * Return the position Z of the object
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return $this
     *
     */
    public function getPositionZ(): float
    {
        return $this->positionZ;
    }

    /**
     * Set the position Z of the object
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $positionZ
     *
     * @return $this
     *
     */
    public function setPositionZ(float $positionZ): Position
    {
        $this->positionZ = $positionZ;

        return $this;
    }

}

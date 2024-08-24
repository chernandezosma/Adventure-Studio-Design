<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        Entity.php
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

use App\constants\Constants;
use App\exceptions\CalculusImpossibleException;
use InvalidArgumentException;

class Item extends Base
{
    /**
     * Entity's description
     *
     * @var Description|null
     */
    protected ?Description $description;

    /**
     * Entity's weight
     *
     * @var float
     */
    protected float $weight;

    /**
     * Entity's height
     *
     * @var float
     */
    protected float $height;

    /**
     * Entity's width
     *
     * @var float
     */
    protected float $width;

    /**
     * Entity's depth
     *
     * @var float
     */
    protected float $depth;

    /**
     * Entity's position in the game world
     *
     * @var Position
     */
    protected Position $position;

    /**
     * Attributes applicable to the entity. That is the possibilities to do with the
     * entity, for example, if it can be dropped, or if it can be used with other entity
     *
     * @var array <EntityAttributes>
     */
    protected array $attributes;

    /**
     * Build a new Entity with minimum data.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  string  $name
     * @param  string  $description
     *
     * @throws InvalidArgumentException
     */
    public function __construct(string $name, string $description)
    {
        parent::__construct($name);

        if (empty($description)) {
            throw new InvalidArgumentException('Name and description must not be empty');
        }
        $this->description = new Description([
            Description::NORMAL_DESCRIPTION_KEY => $description
        ]);
        $this->weight = 0.0;
        $this->height = 0.0;
        $this->width = 0.0;
        $this->depth = 0.0;
        $this->position = new Position(0.0, 0.0, 0.0);
        $this->attributes = [];
    }

    /**
     * Return the entity's description
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return Description|null
     *
     */
    public function getDescription(): Description
    {
        return $this->description;
    }

    /**
     * Set the entity's description. It can be null or empty.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  Description|null  $description
     *
     * @return $this
     *
     */
    public function setDescription(?Description $description): Item
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Set the entity's weight
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return float
     *
     */
    public function getWeight(): float
    {
        return $this->weight;
    }

    /**
     * Return the entity's weight
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $weight
     *
     * @return $this
     *
     */
    public function setWeight(float $weight): Item
    {
        if ($weight < 0) {
            throw new InvalidArgumentException('Weight must be a positive value.');
        }
        $this->weight = $weight;

        return $this;
    }

    /**
     * Set the entity's height
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return float
     *
     */
    public function getHeight(): float
    {
        return $this->height;
    }

    /**
     * Return the entity's height
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $height
     *
     * @return $this
     *
     */
    public function setHeight(float $height): Item
    {
        if ($height <= 0) {
            throw new InvalidArgumentException('Height must be a positive value greater than zero.');
        }
        $this->height = $height;

        return $this;
    }

    /**
     * Set the entity's width
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return float
     *
     */
    public function getWidth(): float
    {
        return $this->width;
    }

    /**
     * Return the entity's width
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $width
     *
     * @return $this
     *
     */
    public function setWidth(float $width): Item
    {
        if ($width <= 0) {
            throw new InvalidArgumentException('Width must be a positive value greater than zero.');
        }
        $this->width = $width;

        return $this;
    }

    /**
     * Return the entity's depth
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return float
     *
     */
    public function getDepth(): float
    {
        return $this->depth;
    }

    /**
     * Set the entity's depth. If the entity has not depth it must be zero
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  float  $depth
     *
     * @return $this
     *
     */
    public function setDepth(float $depth): Item
    {
        if ($depth < 0) {
            throw new InvalidArgumentException('Depth must be a positive value.');
        }
        $this->depth = $depth;

        return $this;
    }

    /**
     * Return the position of the entity in the game 3D space
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return Position
     *
     */
    public function getPosition(): Position
    {
        return $this->position;
    }

    /**
     * Set the position of the entity in the game 3D space
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  Position  $position
     *
     * @return $this
     *
     */
    public function setPosition(Position $position): Item
    {
        $this->position = $position;

        return $this;
    }

    /**
     * Return the entity attributes.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return array
     *
     */
    public function getAttributes(): array
    {
        return $this->attributes;
    }

    /**
     * Set the entity attributes.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  array  $attributes
     *
     * @return $this
     *
     */
    public function setAttributes(array $attributes): Item
    {
        $this->attributes = $attributes;

        return $this;
    }

    /**
     * Calculate the entity volume. An exception will be thrown if height
     * or width is zero.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return float
     *
     * @throws CalculusImpossibleException
     */
    public function getVolume(): float
    {
        if ($this->height == 0 || $this->width == 0) {
            throw new CalculusImpossibleException('There is no possible to calc a volume without height or width');
        }

        $result = $this->height * $this->width;
        if ($this->depth > 0) {
            $result = $result * $this->depth;
        }

        return $result;
    }
}

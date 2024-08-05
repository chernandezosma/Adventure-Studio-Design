<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        asdbase.php
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

use Illuminate\Support\Str;
use InvalidArgumentException;
use Ramsey\Uuid\UuidInterface;

class ASDbase
{
    /**
     * UUID for the entity. It must be unique along the whole project
     *
     * @var UuidInterface
     */
    protected UuidInterface $uuid;

    /**
     * Entity name
     *
     * @var string
     */
    protected string $name;

    /**
     * @param  string  $name
     */
    public function __construct(string $name)
    {
        if (empty($name)) {
            throw new InvalidArgumentException('Name parameter is required');
        }

        $this->uuid = Str::uuid();
        $this->name = $name;
    }

    /**
     * Return the UUID of the entity
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string
     *
     */
    public function getUuid(): UuidInterface
    {
        return $this->uuid;
    }

    /**
     * Get the entity's name.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string
     *
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Set the entity's name
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  string  $name
     *
     * @return $this
     *
     */
    public function setName(string $name): Entity
    {
        if (empty($name)) {
            throw new InvalidArgumentException('name is required');
        }

        $this->name = $name;

        return $this;
    }

}

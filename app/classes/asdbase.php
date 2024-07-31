<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        asdbase.php
 * Description:      See the project README.md
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

use InvalidArgumentException;
use Ramsey\Uuid\UuidInterface;

class asdbase
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
     * Set the new UUID of an entity. If the $uuid member has value, then you must Only
     * can do this action force the value reassignment. Bear in mind that this process
     * will affect to all the highest order related entities, so we need to dispatch an
     * event to reassign the new value.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  UuidInterface  $uuid
     * @param  bool  $force
     *
     * @return $this
     *
     * TODO: implement the event to notify to every object that the entity UUID has been changed
     */
    public function setUuid(UuidInterface $uuid, bool $force = false): Entity
    {
        if ($force) {
            $this->uuid = $uuid;
            // EntityUUIDChangedEvent::dispatch($this);
        }

        return $this;
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
            throw new InvalidArgumentException('Name must not be empty');
        }

        $this->name = $name;

        return $this;
    }

}

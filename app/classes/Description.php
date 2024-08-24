<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        Description.php
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
use InvalidArgumentException;

class Description
{
    public const string NORMAL_DESCRIPTION_KEY = 'normal';
    public const string SMELL_DESCRIPTION_KEY = 'smell';
    public const string SOUND_DESCRIPTION_KEY = 'sound';

    /**
     * Description of the object.
     *
     * @var string
     */
    protected string $normal;

    /**
     * The smell description of the object.
     *
     * @var string|null
     */
    protected ?string $smell;

    /**
     * The sound description of the object.
     *
     * @var string|null
     */
    protected ?string $sound;

    /**
     * Builds a default description object
     *
     * @param  array  $descriptions  default []
     *
     * @throws InvalidArgumentException
     */
    public function __construct(?array $descriptions = [])
    {
//        if (count($descriptions) === 0 ||
//            !in_array(Constants::NORMAL_DESCRIPTION, array_keys($descriptions)) ||
//            empty($descriptions[Constants::NORMAL_DESCRIPTION])) {
//            throw new InvalidArgumentException('You must provide at least a normal description of the object.');
//        }

        $this->normal = '';
        $this->smell = '';
        $this->sound = '';

        if (in_array(Description::NORMAL_DESCRIPTION_KEY, array_keys($descriptions))) {
            $this->normal = empty($descriptions[Description::NORMAL_DESCRIPTION_KEY]) ? '' : $descriptions[Description::NORMAL_DESCRIPTION_KEY];
        }

        if (in_array(Description::SMELL_DESCRIPTION_KEY, array_keys($descriptions))) {
            $this->smell = empty($descriptions[Description::SMELL_DESCRIPTION_KEY]) ? '' : $descriptions[Description::SMELL_DESCRIPTION_KEY];
        }

        if (in_array(Description::SOUND_DESCRIPTION_KEY, array_keys($descriptions))) {
            $this->sound = empty($descriptions[Description::SOUND_DESCRIPTION_KEY]) ? '' : $descriptions[Description::SOUND_DESCRIPTION_KEY];
        }
    }

    /**ç
     * Return the normal description
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string
     *
     */
    public function getNormalDescription(): string
    {
        return $this->normal;
    }

    /**
     * Set the normal description
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  string  $normal
     *
     * @return $this
     *
     */
    public function setNormalDescription(string $normal): Description
    {
        $this->normal = $normal;

        return $this;
    }

    /**ç
     * Return the smell description
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string?null
     *
     */
    public function getSmellDescription(): ?string
    {
        return $this->smell;
    }

    /**
     * Set how the entity smells as description
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  string|null  $smell
     *
     * @return $this
     */
    public function setSmellDescription(?string $smell = null): Description
    {
        $this->smell = $smell;

        return $this;
    }

    /**ç
     * Return the sound description
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string|null
     *
     */
    public function getSoundDescription(): ?string
    {
        return $this->sound;
    }

    /**
     * Set how the object sound as description
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  string|null  $sound
     *
     * @return $this
     */
    public function setSoundDescription(?string $sound = null): Description
    {
        $this->sound = $sound;

        return $this;
    }
}

<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        Sound.php
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
use App\exceptions\FileCannotBeAccessibleException;
use App\exceptions\InvalidMimeTypeException;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use InvalidArgumentException;

class Sound extends Resource
{
    /**
     * Resource length of sound in seconds
     *
     * @var int
     */
    protected int $length;

    /**
     * Image file types
     *
     * @var array
     */
    private array $soundMimetypes;

    /**
     * Resource constructor.
     *
     * @param  string  $name
     * @param  string  $filename
     *
     * @throws FileCannotBeAccessibleException
     * @throws FileNotFoundException
     */
    public function __construct(string $name, string $filename)
    {
        parent::__construct($name, $filename);
        $this->soundMimetypes = $this->getMimeTypesFor(Constants::AUDIO_MIME_TYPE);
        $this->length = Constants::MINIMUM_LENGTH_SIZE;
        $this->type = $this->getFileMimeType();
    }

    /**
     * Return the length of the resource (in seconds)
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return int
     *
     */
    public function getLength(): int
    {
        return $this->length;
    }

    /**
     * Set the resource height of the resource (in pixels))
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  int  $length
     *
     * @return $this
     *
     */
    public function setLength(int $length): Resource
    {
        $this->length = $length;

        return $this;
    }

    /**
     * Set the mimetype of the resource
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  string  $type
     *
     * @return $this
     *
     * @throws InvalidMimeTypeException
     * @throws InvalidArgumentException
     */
    public function setType(string $type): Resource
    {
        if (!in_array($type, $this->soundMimetypes) || $type !== mime_content_type($this->filename)) {
            throw new InvalidMimeTypeException('The given mimetype must be valid and allowed. See allowedMimetypes()');
        }

        $this->type = $type;

        return $this;
    }

    /**
     * Return the list of allowed mimetypes in JSON format
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     */
    public function getAllowedMimetypes(): string
    {
        return json_encode($this->soundMimetypes, JSON_UNESCAPED_SLASHES);
    }
}

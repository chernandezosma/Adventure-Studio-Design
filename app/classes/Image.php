<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        Image.php
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

use App\constants\Constants;
use App\exceptions\FileCannotBeAccessibleException;
use App\exceptions\InvalidMimeTypeException;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use InvalidArgumentException;

class Image extends Resource
{
    /**
     * Resource width in pixels
     *
     * @var int
     */
    protected int $width;

    /**
     * Resource height in pixels
     *
     * @var int
     */
    protected int $height;

    /**
     * Image file types
     *
     * @var array
     */
    private array $imageMimetypes;

    /**
     * Resource constructor.
     *
     * @param  string  $filename
     *
     * @throws FileNotFoundException
     * @throws FileCannotBeAccessibleException
     */
    public function __construct(string $filename)
    {
        $this->imageMimetypes = array_filter(array_map(
            function($item) {
                if (str_contains($item, 'image')) {
                    return $item;
                }
            },
            array_keys(Constants::MIME_TYPES)
        ));

        parent::__construct($filename);
        $this->width = 1;
        $this->height = 1;
    }

    /**
     * Return the width of the resource (in pixels)
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return int
     *
     */
    public function getWidth(): int
    {
        return $this->width;
    }

    /**
     * Set the width of the resource (in pixels)
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  int  $width
     *
     * @return $this
     *
     */
    public function setWidth(int $width): Resource
    {
        $this->width = $width;

        return $this;
    }

    /**
     * Return the height of the resource (in pixels)
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return int
     *
     */
    public function getHeight(): int
    {
        return $this->height;
    }

    /**
     * Set the resource height of the resource (in pixels))
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @param  int  $height
     *
     * @return $this
     *
     */
    public function setHeight(int $height): Resource
    {
        $this->height = $height;

        return $this;
    }

    /**
     * Set the mimetype of the resource
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
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
        if (!in_array($type, $this->imageMimetypes)) {
            throw new InvalidArgumentException('The given mimetype must be valid and allowed. See allowedMimetypes()');
        }

        if ($type !== mime_content_type($this->filename)) {
            throw new InvalidMimeTypeException('The mimetype given does not match the file mimetype.');
        }

        $this->type = $type;

        return $this;
    }

    /**
     * Return the list of allowed mimetypes in JSON format
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     */
    public function getAllowedMimetypes(): string
    {
        return json_encode($this->imageMimetypes, JSON_UNESCAPED_SLASHES);
    }

}

<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        Resource.php
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

class Resource extends ASDbase
{
    /**
     * Hash of the resource content
     *
     * @var string
     */
    protected string $hash;

    /**
     * Mime type of the resource
     *
     * @var string
     */
    protected string $type;

    /**
     * Resource file path
     *
     * @var string
     */
    protected string $filename;

    /**
     * Resource constructor.
     *
     * @param  string  $filename
     *
     * @throws FileNotFoundException
     * @throws FileCannotBeAccessibleException
     */
    public function __construct(string $name, string $filename)
    {
        parent::__construct($name);
        if (!file_exists($filename)) {
            throw new FileNotFoundException('The file does not exists');
        }

        if (!is_readable($filename)) {
            throw new FileCannotBeAccessibleException('The file is not accessible');
        }

        $this->filename = $filename;
        $this->type = $this->getFileMimeType();
        if ($this->filename) {
            $this->createHash();
        }
    }

    /**
     * Returns the mime types of the given type of resouce (image, audio, video or text)
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  string  $type
     *
     * @return array
     *
     */
    protected function getMimeTypesFor(string $type): array
    {
        return array_filter(array_map(
            function($item) use ($type) {
                if (str_contains($item, $type)) {
                    return $item;
                }

                return false;
            },
            array_keys(Constants::MIME_TYPES)
        ));
    }

    /**
     * Return the file hash
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string
     *
     */
    public function getHash(): string
    {
        return $this->hash;
    }

    /**
     * Calculate the hash of the filename in the class
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return $this
     *
     */
    public function createHash(): Resource
    {
        if (!empty($this->filename) && !is_dir($this->filename)) {
            $this->hash = hash_file('sha256', $this->filename, Constants::BINARY_FILE);
        }

        return $this;
    }

    /**
     * Return the mimetype of the resource
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string
     *
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * Set the mimetype of the internal filename
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string
     *
     */
    public function getFileMimeType(): string
    {
        if ($this->filename) {
            $this->type = mime_content_type($this->filename);
        }

        return $this->type;
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
        if (!in_array($type, array_keys(Constants::MIME_TYPES))) {
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
        return json_encode(
            Constants::MIME_TYPES,
            JSON_UNESCAPED_SLASHES);
    }

    /**
     * Return the resource extensions based on the resource mimetype
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return array
     *
     */
    public function getTypeExtensions(): array
    {
        if (empty ($this->type)) {
            throw new InvalidArgumentException('The resource type cannot be empty.');
        }

        return Constants::MIME_TYPES[$this->type];
    }

    /**
     * Return the resource filename in the local filesystem
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string
     *
     */
    public function getFilename(): string
    {
        return $this->filename;
    }
}

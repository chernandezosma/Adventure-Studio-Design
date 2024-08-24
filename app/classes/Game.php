<?php

namespace App\classes;

use App\constants\Constants;
use App\constants\Languages;
use InvalidArgumentException;
use Ramsey\Uuid\UuidInterface;

class Game extends Base
{
    /**
     * Author name
     *
     * @var string|null
     */
    protected ?string $author;

    /**
     * Copyright text for the game
     *
     * @var string|null
     */
    protected ?string $copyright;

    /**
     * Game title
     *
     * @var string|null
     */
    protected ?string $title;

    /**
     * Game version
     *
     * @var string
     */
    protected string $version;

    /**
     * Score of the state in the game. It will be a percentage over 100.
     * The 100 will be the total game resolution.
     *
     * @var int
     */
    protected int $score;

    /**
     * Supported languages of the game. They will be represented as ISO 639-1
     * Usually we fill the common languages and the user can add more languages.
     *
     * @see https://documentation.softwareag.com/webmethods/tamino/ins97/tsl/langcodes.htm
     * @var array
     */
    protected array $languages;

    /**
     * Target system where the game will run.
     *
     * @var array
     * @see Constants
     */
    protected array $targetPlatform;

    /**
     * The game can run in the following modes.
     *
     * @var int
     */
    protected int $mode;

    /**
     * If is not empty, it contains the name of the file where the log will be written
     *
     * @var string|null
     */
    protected ?string $outputFile;

    /**
     * The uuid of the game entrypoint
     *
     * @var UuidInterface|null
     */
    protected ?UuidInterface $entrypoint;

    /**
     * Class Constructor
     *
     * @param  string  $name
     */
    public function __construct(string $name)
    {
        parent::__construct($name);
        $this->score = 0;
        $this->languages = [Languages::SPAIN_SPANISH];
        $this->targetPlatform = [Constants::TARGET_SYSTEM_WEB];
        $this->mode = Constants::DEBUG_MODE;
        $this->outputFile = null;
        $this->entrypoint = null;
        $this->author = null;
        $this->copyright = null;
        $this->title = null;
        $this->version = '0.0.1';
    }

    /**
     * Return the author name
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return string|null
     *
     */
    public function getAuthor(): ?string
    {
        return $this->author;
    }

    /**
     * Set the author name
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  string  $author
     *
     * @return $this
     *
     */
    public function setAuthor(string $author): Game
    {
        if (empty($author)) {
            throw new InvalidArgumentException('The game must have an author.');
        }
        $this->author = $author;

        return $this;
    }

    /**
     * Return the copyright text
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return string|null
     *
     */
    public function getCopyright(): ?string
    {
        return $this->copyright;
    }

    /**
     * Set the copyright text
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  string  $copyright
     *
     * @return $this
     *
     */
    public function setCopyright(string $copyright): Game
    {
        $this->copyright = $copyright;

        return $this;
    }

    /**
     * Get the game title
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return string|null
     *
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * Set the game title
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  string  $title
     *
     * @return $this
     *
     */
    public function setTitle(string $title): Game
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the game version
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return string|null
     *
     */
    public function getVersion(): ?string
    {
        return $this->version;
    }

    /**
     * Set the game version
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  string  $version
     *
     * @return $this
     *
     */
    public function setVersion(string $version): Game
    {
        $this->version = $version;

        return $this;
    }

    /**
     * Return the current score or the game.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return int
     *
     */
    public function getScore(): int
    {
        return $this->score;
    }

    /**
     * Set the current score of the game.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  int  $score
     *
     * @return $this
     *
     */
    public function setScore(int $score): Game
    {
        if ($this->score > 0) {
            $this->score += $score;
        } else {
            $this->score = $score;
        }

        return $this;
    }

    /**
     * Return the current languages set used in the game.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return array
     *
     */
    public function getLanguages(): array
    {
        return $this->languages;
    }

    /**
     * Set the supported languages in the game.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  array  $languages
     *
     * @return $this
     *
     */
    public function setLanguages(array $languages): Game
    {
        if (empty($languages)) {
            throw new InvalidArgumentException('The game must have at least one language');
        }

        $this->languages = $languages;

        return $this;
    }

    /**
     * Return the target platforms where the gams should run.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return array
     *
     */
    public function getTargetPlatform(): array
    {
        return $this->targetPlatform;
    }

    /**
     * Set the target platforms where the gams should run.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  array  $targetPlatform
     *
     * @return $this
     *
     */
    public function setTargetPlatform(array $targetPlatform): Game
    {
        if (empty($targetPlatform)) {
            $targetPlatform = [Constants::TARGET_SYSTEM_WEB];
        }

        $this->targetPlatform = $targetPlatform;

        return $this;
    }

    /**
     * Return the mode to run the game
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return int
     *
     */
    public function getMode(): int
    {
        return $this->mode;
    }

    /**
     * Set the mode which the game should run
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  int  $mode
     *
     * @return $this
     *
     */
    public function setMode(int $mode): Game
    {
        if (!in_array($mode, [
            Constants::PRODUCTION_MODE,
            Constants::DEBUG_MODE,
            Constants::TEST_MODE,
        ])) {
            $mode = Constants::DEBUG_MODE;
        }
        $this->mode = $mode;

        return $this;
    }

    /**
     * Return the name of the output file for logging feature
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return string|null
     *
     */
    public function getOutputFile(): ?string
    {
        return $this->outputFile;
    }

    /**
     * Set the full path of the file which will receive the logging messages.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  string|null  $outputFile
     *
     * @return $this
     *
     */
    public function setOutputFile(?string $outputFile): Game
    {
        $this->outputFile = $outputFile;

        return $this;
    }

    /**
     * Return the entry point of the game. It is the UUID of a Stage object.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return UuidInterface|null
     *
     */
    public function getEntrypoint(): ?UuidInterface
    {
        return $this->entrypoint;
    }

    /**
     * Set the entry point for a game. This is a Stage UUID
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @param  UuidInterface|null  $entrypoint
     *
     * @return $this
     *
     */
    public function setEntrypoint(?UuidInterface $entrypoint): Game
    {
        $this->entrypoint = $entrypoint;

        return $this;
    }
}

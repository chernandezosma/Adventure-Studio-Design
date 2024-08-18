<?php
/********************************************************************************
 * Project Name:    Adventure Studio Designer
 * Filename:        GameTest.php
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
namespace Tests\Unit;

use App\classes\Game;
use App\constants\Constants;
use App\constants\Languages;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Tests\TestCase;
use TypeError;

class GameTest extends TestCase
{
    public const string GAME_NAME = 'Testing ending story';
    public const string GAME_AUTHOR = 'Sir Arthur Conan Doyle';

    /**
     * Test the constructor with the correct parameter.
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_constructor_all_ok()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $this->assertEquals(self::GAME_NAME, $game->getName());
        $this->assertEquals([Languages::SPAIN_SPANISH], $game->getLanguages());
        $this->assertEquals([Constants::TARGET_SYSTEM_WEB], $game->getTargetPlatform());
        $this->assertEquals(Constants::DEBUG_MODE, $game->getMode());
        $this->assertNull($game->getOutputFile());
        $this->assertNull($game->getEntrypoint());
        $this->assertNull($game->getAuthor());
        $this->assertNull($game->getCopyright());
        $this->assertNull($game->getTitle());
        $this->assertEquals('0.0.1', $game->getVersion());
        $this->assertNull($game->getDescription());
        $this->assertEquals(0, $game->getScore());
    }

    /**
     * Test constructor with null as Name
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Aug.2024
     *
     * @return void
     *
     */
    public function test_constructor_wrong_parameters()
    {
        $this->expectException(TypeError::class);
        new Game(null);
    }

    public function test_constructor_with_empty_name()
    {
        $this->expectException(InvalidArgumentException::class);
        new Game('');
    }

    public function test_setters()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $this->assertNull($game->getOutputFile());
        $this->assertNull($game->getEntrypoint());
        $this->assertNull($game->getDescription());
        $this->assertEquals(0, $game->getScore());
    }

    public function test_game_name()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setName('New adventure name');
        $this->assertEquals('New adventure name', $game->getName());
    }

    public function test_wrong_values_for_game_name()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $this->expectException(InvalidArgumentException::class);
        $game->setName('');
    }

    public function test_set_author()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setAuthor(self::GAME_AUTHOR);
        $this->assertEquals(self::GAME_AUTHOR, $game->getAuthor());
    }

    public function test_wrong_values_for_author()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $this->expectException(InvalidArgumentException::class);
        $game->setAuthor('');
    }

    public function test_set_languages()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setLanguages([Languages::US_ENGLISH, Languages::ARGENTINA_SPANISH]);
        $this->assertEquals([Languages::US_ENGLISH, Languages::ARGENTINA_SPANISH], $game->getLanguages());
    }

    public function test_set_wrong_values_for_languages()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $this->expectException(InvalidArgumentException::class);
        $game->setLanguages([]);
    }

    public function test_set_target_platform()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setTargetPlatform([Constants::TARGET_SYSTEM_WIN, Constants::TARGET_SYSTEM_MAC_OS]);
        $this->assertEquals([Constants::TARGET_SYSTEM_WIN, Constants::TARGET_SYSTEM_MAC_OS], $game->getTargetPlatform());
    }

    public function test_set_wrong_target_platform()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setTargetPlatform([]);
        $this->assertEquals([Constants::TARGET_SYSTEM_WEB], $game->getTargetPlatform());
    }

    public function test_production_mode()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setMode(Constants::PRODUCTION_MODE);
        $this->assertEquals(Constants::PRODUCTION_MODE, $game->getMode());
    }

    public function test_wrong_production_mode()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setMode(99);
        $this->assertEquals(Constants::DEBUG_MODE, $game->getMode());
    }

    public function test_set_output_file()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setOutputFile('game.exe');
        $this->assertEquals('game.exe', $game->getOutputFile());
    }

    public function test_set_copyright_notice()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setCopyright('');
        $this->assertEquals('', $game->getCopyright());

        $game->setCopyright('This is a copyright notice');
        $this->assertEquals('This is a copyright notice', $game->getCopyright());
    }

    public function test_set_title()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setTitle('This is a title');
        $this->assertEquals('This is a title', $game->getTitle());

        $game->setTitle('');
        $this->assertEquals('', $game->getTitle());
    }

    public function test_set_version()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $this->assertEquals('0.0.1', $game->getVersion());

        $game->setVersion('1.2.3');
        $this->assertEquals('1.2.3', $game->getVersion());
    }

    public function test_set_description()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setDescription('new description');
        $this->assertEquals('new description', $game->getDescription());
    }

    public function test_set_score()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $game->setScore(10);
        $this->assertEquals(10, $game->getScore());

        $game->setScore(100);
        $this->assertEquals(110, $game->getScore());
    }


    public function test_set_entry_point()
    {
        $game = new Game(self::GAME_NAME);
        $this->assertNotNull($game);
        $this->assertInstanceOf(Game::class, $game);

        $entryPoint = Str::uuid();
        $game->setEntryPoint($entryPoint);
        $this->assertEquals($entryPoint, $game->getEntrypoint());

        $game->setEntryPoint(null);
        $this->assertEquals(null, $game->getEntrypoint());
    }

}


<?php

namespace App\constants;

class Constants
{
    public const string NORMAL_DESCRIPTION = 'normal';
    public const string SMELL_DESCRIPTION = 'smell';
    public const string SOUND_DESCRIPTION = 'sound';

    public const int MINIMUM_WIDTH_SIZE = 1;
    public const int MINIMUM_HEIGHT_SIZE = 1;
    public const int MINIMUM_LENGTH_SIZE = 1;

    public const bool BINARY_FILE = true;

    public const string AUDIO_MIME_TYPE = 'audio';
    public const string VIDEO_MIME_TYPE = 'video';
    public const string IMAGE_MIME_TYPE = 'image';

    // @see https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
    public const array MIME_TYPES = [
        'audio/midi' => ['mid', 'midi', 'kar', 'rmi'],
        'audio/mp4' => ['m4a', 'mp4a'],
        'audio/mpeg' => ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
        'audio/ogg' => ['oga', 'ogg', 'spx', 'opus'],
        'audio/webm' => ['weba'],
        'audio/x-aac' => ['aac'],
        'audio/x-aiff' => ['aif', 'aiff', 'aifc'],
        'audio/x-flac' => ['flac'],
        'audio/x-matroska' => ['mka'],
        'audio/x-ms-wma' => ['wma'],
        'audio/x-wav' => ['wav'],

        'image/avif' => ['avif'],
        'image/bmp' => ['bmp'],
        'image/gif' => ['gif'],
        'image/jpeg' => ['jpeg', 'jpg', 'jpe'],
        'image/png' => ['png'],
        'image/svg+xml' => ['svg', 'svgz'],
        'image/tiff' => ['tiff', 'tif'],
        'image/vnd.wap.wbmp' => ['wbmp'],
        'image/webp' => ['webp'],
        'image/x-pcx' => ['pcx'],

        'text/html' => ['html', 'htm'],
        'text/plain' => ['txt', 'text', 'conf', 'def', 'list', 'log', 'in'.'md'],

        'video/3gpp' => ['3gp'],
        'video/jpeg' => ['jpgv'],
        'video/mp4' => ['mp4', 'flimp4v', 'flimpg4'],
        'video/mpeg' => ['mpeg', 'flimpg', 'flimpe', 'flim1v', 'flim2v'],
        'video/ogg' => ['ogv'],
        'video/quicktime' => ['qt', 'flimov'],
        'video/webm' => ['webm'],
        'video/x-flv' => ['flv'],
        'video/x-m4v' => ['m4v'],
        'video/x-matroska' => ['mkv', 'flimk3d', 'flimks'],
        'video/x-ms-wmv' => ['wmv'],
        'video/x-msvideo' => ['avi']
    ];
}

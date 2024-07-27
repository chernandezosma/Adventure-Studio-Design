<?php

namespace App\enums;

use App\contracts\ActionInterface;

enum EntityAttributes: string
{
    case ENTITY_USABLE = 'usable';
    case ENTITY_WEARABLE = 'wearable';
    case ENTITY_PORTABLE = 'portable';
    case ENTITY_CONSUMABLE = 'consumable';
    case ENTITY_RECHARGEABLE = 'rechargeable';
    case ENTITY_CONSTRUCTABLE = 'constructable';
    case ENTITY_CONTAINER = 'container';
    case ENTITY_TOOL = 'tool';
    case ENTITY_DROPPABLE = 'droppable';
    case ENTITY_WITH_TTL = 'with_ttl';
    case ENTITY_COMBINABLE = 'combinable';
    case ENTITY_TRANSFORMABLE = 'transformable';

    /**
     * Returns the class which is in charge to manage the entity attribute
     *
     * @author Cayetano H. Osma <chernandez@elestadoweb.com>
     * @version Jul.2024
     *
     * @return string|null
     *
     */
    public function getEntityAttributeClass()
    {
        return match($this) {
            self::ENTITY_USABLE,
            self::ENTITY_WEARABLE,
            self::ENTITY_PORTABLE,
            self::ENTITY_CONSUMABLE,
            self::ENTITY_RECHARGEABLE,
            self::ENTITY_CONSTRUCTABLE,
            self::ENTITY_CONTAINER,
            self::ENTITY_TOOL,
            self::ENTITY_DROPPABLE,
            self::ENTITY_WITH_TTL,
            self::ENTITY_COMBINABLE,
            self::ENTITY_TRANSFORMABLE => ActionInterface::class,
            default => null,
        };
    }

}

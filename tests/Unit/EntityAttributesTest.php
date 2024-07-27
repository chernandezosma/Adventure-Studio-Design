<?php

namespace Tests\Unit;

use App\classes\Position;
use App\contracts\ActionInterface;
use App\enums\EntityAttributes;
use Tests\TestCase;

class EntityAttributesTest extends TestCase
{
    public function test_attributes_class_are_correct()
    {
        $this->assertEquals(
            ActionInterface::class,
            EntityAttributes::ENTITY_CONSTRUCTABLE->getEntityAttributeClass()
        );
    }

}

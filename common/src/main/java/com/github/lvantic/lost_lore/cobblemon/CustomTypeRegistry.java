package com.github.lvantic.lost_lore.cobblemon;

import com.cobblemon.mod.common.api.types.ElementalType;
import dev.architectury.injectables.annotations.ExpectPlatform;

import java.util.HashMap;

public class CustomTypeRegistry {
    public static HashMap<String, ElementalType> customTypes = new HashMap<>();

    public static ElementalType SHADOW = createNewType(
            "Shadow",
            "cobblemon.type.shadow",
            6311554,
            "shadow",
            "Max Void",
            "Black Vortex"
    );
    public static ElementalType CRYSTAL = createNewType(
            "Crystal",
            "cobblemon.type.crystal",
            12364765,
            "crystal",
            "Max Prism",
            "Glinting Beam"
    );

    @ExpectPlatform
    public static ElementalType createNewType(String name, String lang, int hue, String id, String maxMove, String zMove) {
        throw new AssertionError();
    }

    public static void register() {

    }
}

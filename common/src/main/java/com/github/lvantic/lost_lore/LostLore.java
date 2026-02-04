package com.github.lvantic.lost_lore;

import com.github.lvantic.lost_lore.item.LLItems;
import com.github.lvantic.lost_lore.itemGroup.LLTabs;

public final class LostLore {
    public static final String MOD_ID = "lost_lore";

    public static void init() {
        LLItems.register();
        LLTabs.register();
    }
}

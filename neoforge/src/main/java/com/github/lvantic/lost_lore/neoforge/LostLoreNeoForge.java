package com.github.lvantic.lost_lore.neoforge;

import com.github.lvantic.lost_lore.LostLore;
import net.neoforged.fml.common.Mod;

@Mod(LostLore.MOD_ID)
public final class LostLoreNeoForge {
    public LostLoreNeoForge() {
        LostLore.init();
    }
}

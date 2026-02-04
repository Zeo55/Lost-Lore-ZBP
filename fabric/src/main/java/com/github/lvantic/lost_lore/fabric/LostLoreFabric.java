package com.github.lvantic.lost_lore.fabric;

import com.github.lvantic.lost_lore.LostLore;
import net.fabricmc.api.ModInitializer;

public final class LostLoreFabric implements ModInitializer {

    public static void initAfterMSD() {
        LostLore.init();
    }

    @Override
    public void onInitialize() {

    }
}

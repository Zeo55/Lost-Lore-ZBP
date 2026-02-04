package com.github.lvantic.lost_lore.fabric.mixin;

import com.github.lvantic.lost_lore.LostLore;
import com.github.lvantic.lost_lore.fabric.LostLoreFabric;
import com.github.yajatkaul.mega_showdown.MegaShowdown;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(value = MegaShowdown.class, remap = false)
public class MegaShowdownMixin {
    @Inject(method = "init", at = @At("TAIL"))
    private static void pokemonInit(CallbackInfo ci) {
        LostLoreFabric.initAfterMSD();
    }
}

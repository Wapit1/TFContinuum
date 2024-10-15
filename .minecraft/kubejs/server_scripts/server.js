// priority: 0

// Visit the wiki for more info - https://kubejs.com/


TFCEvents.data(event => {
    event.knappingType('embers:caminite_blend', 2, 1, 'tfc:item.knapping.clay', false, true, true, 'embers:caminite_blend', 'kubejs:caminite')
    event.knappingType('productivebees:wax', 2, 1, 'tfc:item.knapping.clay', false, false, true, 'productivebees:wax', 'kubejs:wax')

    //event.metal('kubejs:metallic_naquadah', 2000, 0.8, 'sgjourney:naquadah_alloy', null, 'kubejs:naquadah_sheet', 5, 'kubejs:naquadah')
    
})

ServerEvents.tags('item', event => {
event.remove('forge:plates','tfc:metal/sheet/brass')
event.remove('forge:plates','tfc:metal/sheet/copper')
event.remove('forge:plates','tfc:metal/sheet/gold')
event.remove('forge:plates','tfc:metal/sheet/wrought_iron')
event.remove('forge:plates','tfc:metal/sheet/steel')
event.remove('forge:plates','tfc_ie_addon:metal/sheet/electrum')
event.remove('forge:plates','tfc_ie_addon:metal/sheet/constantan')
event.remove('forge:plates','tfc_ie_addon:metal/sheet/lead')
event.remove('forge:plates','tfc_ie_addon:metal/sheet/uranium')
event.remove('forge:plates','tfc_ie_addon:metal/sheet/aluminum')

event.remove('forge:plates','firmalife:metal/sheet/chromium')
event.remove('forge:plates','firmalife:metal/sheet/stainless_steel')
event.remove('forge:plates','tfc:metal/sheet/bismuth')
event.remove('forge:plates','tfc:metal/sheet/bismuth_bronze')
event.remove('forge:plates','tfc:metal/sheet/black_bronze')
event.remove('forge:plates','tfc:metal/sheet/bronze')
event.remove('forge:plates','tfc:metal/sheet/nickel')
event.remove('forge:plates','tfc:metal/sheet/rose_gold')
event.remove('forge:plates','tfc:metal/sheet/silver')
event.remove('forge:plates','tfc:metal/sheet/tin')
event.remove('forge:plates','tfc:metal/sheet/zinc')
event.remove('forge:plates','tfc:metal/sheet/sterling_silver')
event.remove('forge:plates','tfc:metal/sheet/cast_iron')
event.remove('forge:plates','tfc:metal/sheet/steel')
event.remove('forge:plates','tfc:metal/sheet/black_steel')
event.remove('forge:plates','tfc:metal/sheet/blue_steel')
event.remove('forge:plates','tfc:metal/sheet/red_steel')

event.remove('forge:plates/chromium','firmalife:metal/sheet/chromium')
event.remove('forge:plates/stainless_steel','firmalife:metal/sheet/stainless_steel')
event.remove('forge:plates/bismuth','tfc:metal/sheet/bismuth')
event.remove('forge:plates/bismuth_bronze','tfc:metal/sheet/bismuth_bronze')
event.remove('forge:plates/black_bronze','tfc:metal/sheet/black_bronze')
event.remove('forge:plates/bronze','tfc:metal/sheet/bronze')
event.remove('forge:plates/nickel','tfc:metal/sheet/nickel')
event.remove('forge:plates/rose_gold','tfc:metal/sheet/rose_gold')
event.remove('forge:plates/silver','tfc:metal/sheet/silver')
event.remove('forge:plates/tin','tfc:metal/sheet/tin')
event.remove('forge:plates/zinc','tfc:metal/sheet/zinc')
event.remove('forge:plates/sterling_silver','tfc:metal/sheet/sterling_silver')
event.remove('forge:plates/cast_iron','tfc:metal/sheet/cast_iron')
event.remove('forge:plates/steel','tfc:metal/sheet/steel')
event.remove('forge:plates/black_steel','tfc:metal/sheet/black_steel')
event.remove('forge:plates/blue_steel','tfc:metal/sheet/blue_steel')
event.remove('forge:plates/red_steel','tfc:metal/sheet/red_steel')

event.remove('forge:plates/electrum','tfc_ie_addon:metal/sheet/electrum')
event.remove('forge:plates/constantan','tfc_ie_addon:metal/sheet/constantan')
event.remove('forge:plates/lead','tfc_ie_addon:metal/sheet/lead')
event.remove('forge:plates/uranium','tfc_ie_addon:metal/sheet/uranium')
event.remove('forge:plates/aluminum','tfc_ie_addon:metal/sheet/aluminum')

event.remove('forge:plates/brass','tfc:metal/sheet/brass')
event.remove('forge:plates/copper','tfc:metal/sheet/copper')
event.remove('forge:plates/gold','tfc:metal/sheet/gold')
event.remove('forge:plates/iron','tfc:metal/sheet/wrought_iron')
event.remove('railways:internal/plates/iron_plates','tfc:metal/sheet/wrought_iron')
event.remove('forge:plates/obsidian','tfc:metal/sheet/steel')
event.remove('forge:dusts/coal_coke','tfmg:coal_coke_dust')

event.add('forge:storage_blocks/bronze', '#forge:storage_blocks/strong_bronze')
event.add('forge:ingots/bronze', '#forge:ingots/strong_bronze')
event.add('forge:nuggets/bronze', '#forge:nuggets/strong_bronze')
event.add('forge:plates/bronze', '#forge:plates/strong_bronze')
//event.add('map_atlases:sticky_crafting_items','#forge:dough')

event.add('tfc:usable_on_tool_rack', '#minecraft:tools')

event.add('botania:seed_apothecary_reagent', '#tfc:seeds')

//event.add('tfc:saws','aether:obsidian_gloves')
//event.add('tfc:axes_that_log','aether:obsidian_gloves')
event.add('forge:slimeballs','tfc:glue')

event.add('forge:plates','railcraft:tin_plate')
event.add('forge:plates','railcraft:zinc_plate')
event.add('forge:plates','railcraft:bronze_plate')
event.add('forge:plates','railcraft:invar_plate')

event.add('forge:honeycombs','firmalife:beeswax')

event.add('tfc:pileable_ingots', 'sgjourney:naquadah_alloy')
event.add('tfc:pileable_ingots', 'botania:manasteel_ingot')
//event.add(`tfc:pileable_ingots`,`#forge:ingots`)

event.add('iceandfire:heal_hippocampus', '#minecraft:kelp')
event.add('iceandfire:tempt_hippocampus', '#minecraft:kelp')

})

ServerEvents.tags('block', event => {
event.add("minecraft:dirt",["#tfc:grass","#tfc:dirt"])
})

ServerEvents.tags("worldgen/biome", (event) => {
    event.add("tfc:overworld", ["tfc:badlands","tfc:canyons","tfc:deep_ocean","tfc:deep_ocean_trench","tfc:highlands","tfc:hills","tfc:inverted_badlands","tfc:lake","tfc:low_canyons","tfc:lowlands","tfc:mountain_lake","tfc:mountains","tfc:ocean","tfc:ocean_reef","tfc:oceanic_mountain_lake","tfc:oceanic_mountains","tfc:old_mountain_lake","tfc:old_mountains","tfc:plains","tfc:plateau","tfc:plateau_lake","tfc:river","tfc:rolling_hills","tfc:salt_marsh","tfc:shore","tfc:tidal_flats","tfc:volcanic_mountain_lake","tfc:volcanic_mountains","tfc:volcanic_oceanic_mountain_lak","tfc:volcanic_oceanic_mountains"])
    event.add("minecraft:is_overworld", ["#tfc:overworld"])
    event.add("minecraft:is_badlands", ["tfc:inverted_badlands", "tfc:badlands"])
    event.add("minecraft:is_beach", ["tfc:shore", "tfc:tidal_flats"])
    event.add("minecraft:is_deep_ocean", ["tfc:deep_ocean_trench", "tfc:deep_ocean"])
    event.add("minecraft:is_hill", ["tfc:rolling_hills", "tfc:hills"])
    event.add("minecraft:is_mountain", ["tfc:volcanic_oceanic_mountains","tfc:old_mountains","tfc:volcanic_mountains","tfc:mountains","tfc:oceanic_mountains","tfc:highlands"])
    event.add("minecraft:is_ocean", ["tfc:ocean", "tfc:ocean_reef"])
    event.add("minecraft:is_river", ["tfc:river"])
    event.add("minecraft:is_lake", ["tfc:volcanic_mountain_lake","tfc:volcanic_oceanic_mountain_lake","tfc:oceanic_mountain_lake","tfc:mountain_lake","tfc:plateau_lake","tfc:lake","tfc:old_mountain_lake"])
    event.add("minecraft:is_savanna", ["tfc:plains", "tfc:plateau"])
    event.add("minecraft:is_lowland", ["tfc:lowlands", "tfc:low_canyons"])

//Tag adds "Stolen" From Below
//https://github.com/AllTheMods/Gravitas2/blob/main/kubejs/server_scripts/tags/worldgen_biomes.js
    event.add("createpickywheels:picky_waterwheels", ["tfc:river"])
    event.add("createpickywheels:picky_windmills", ["#aether:is_aether"])
    event.add("botania:mystical_flower_spawnlist",["#tfc:overworld","#aether:is_aether"])
    event.add("sgjourney:has_structure/terra_stargate_biomes",["#tfc:overworld"])
    event.add("sgjourney:has_structure/buried_stargate/buried_stargate_biomes",["#tfc:overworld"])
    event.add("ftbessentials:ignore_rtp",["tfc:ocean","tfc:ocean_reef","tfc:deep_ocean","tfc:deep_ocean_trench"])
    event.add("creeperoverhaul:where_creepers_spawn",["#tfc:overworld"])
    event.add("endermanoverhaul:cave_spawns",["#tfc:overworld"])
    event.add("endermanoverhaul:badlands_spawns",["tfc:badlands","tfc:inverted_badlands"])
    event.add("endermanoverhaul:coral_spawns",["tfc:ocean_reef"])
    event.add("endermanoverhaul:savanna_spawns", ["tfc:plains", "tfc:plateau"])
    event.add("endermanoverhaul:windswept_hills_spawns",["aether:skyroot_meadow"])

    event.add("minecraft:mineshaft_blocking", ["#tfc:overworld"])
    event.add("minecraft:snow_golem_melts", ["#tfc:is_volcanic"])
    
    event.add("additionalstructures:as_custom",["#tfc:overworld"])
    event.add("betterdeserttemples:has_structure/better_desert_temple",["tfc:inverted_badlands"])
    event.add("betteroceanmonuments:has_structure/better_ocean_monument",["tfc:deep_ocean_trench"])
    event.add("betterstrongholds:has_structure/better_stronghold",["#tfc:overworld"])
    event.add("betterwitchhuts:has_structure/better_witch_hut",["tfc:lowlands"])
    event.add("betterwitchhuts:has_structure/witch_circle",["tfc:lowlands"])
    event.add("minecraft:has_closer_water_fog",["tfc:lowlands"])

    event.add("forge:is_water",["tfc:river","tfc:ocean","tfc:ocean_reef","tfc:deep_ocean","tfc:deep_ocean_trench"])

})
BlockEvents.rightClicked(event => {
    let item = event.item
    let block = event.block
    if (item.hasTag("tfc:axes_that_log") && block.hasTag('minecraft:logs') && !block.hasTag('forge:stripped_logs')) {
    block.popItem('farmersdelight:tree_bark')
    }
  })

BlockEvents.rightClicked('block.right_click', event => {
    const { player, hand, item} = event;
    if (hand != 'MAIN_HAND') return;
    if (!item.hasNBT()) return;
    if ((item.id == 'firmalife:beehive_frame') && item.getNbtString().includes('queen:1')) {
        item.count--
        event.player.tell("The frame broke while freeing the queen");
        let mob = event.block.up.createEntity('minecraft:bee')
        mob.spawn()
}
})

TFCEvents.limitContainer('minecraft:generic_9x3', event => {
    event.limit('large')
})
TFCEvents.limitContainer('minecraft:generic_9x6', event => {
    event.limit('large')
})

TFCEvents.data(event => {
    event.fuel('embers:ember_crystal_cluster', 1600, 16000, 1)
    event.fuel('embers:ember_grit', 1200, 300, 1)
})
ServerEvents.tags('item', event => {
event.add('tfc:forge_fuel',['embers:ember_crystal_cluster','embers:ember_grit'])
event.add('tfc:blast_furnace_fuel',['embers:ember_crystal_cluster','embers:ember_grit'])
event.add('tfc:blast_furnace_fuel','embers:ember_crystal_cluster')
event.add('tfc:blast_furnace_fuel','#forge:coal_coke')
event.add('tfc:redstone_ore',['tfc:ore/cryolite','tfc:ore/cinnabar'])

})

ServerEvents.tags('block', event => {
    event.add("tfc:forge_insulation",["#minecraft:stone_bricks"])
    event.add("tfc:forge_insulation",["embers:caminite_bricks","embers:caminite_large_bricks","embers:caminite_large_tile","embers:caminite_tiles","embers:archaic_bricks","embers:archaic_edge","embers:archaic_tile","embers:archaic_large_bricks","embers:ashen_stone","embers:ashen_brick","embers:ashen_tile"])
    event.add("tfc:forge_invisible_whitelist",["#quark:hollow_logs"])    
    event.add("tfc:forge_invisible_whitelist",["sootychimneys:brick_chimney","sootychimneys:dirty_brick_chimney","sootychimneys:cobblestone_chimney","sootychimneys:dirty_cobblestone_chimney","sootychimneys:stone_brick_chimney","sootychimneys:dirty_stone_brick_chimney","sootychimneys:mud_brick_chimney","sootychimneys:dirty_mud_brick_chimney","sootychimneys:iron_chimney","sootychimneys:dirty_iron_chimney","sootychimneys:copper_chimney","sootychimneys:dirty_copper_chimney","sootychimneys:terracotta_chimney","sootychimneys:dirty_terracotta_chimney","quark:chute","minecraft:hopper","create:chute","immersiveengineering:chute_iron","immersiveengineering:chute_steel","immersiveengineering:chute_aluminum","immersiveengineering:chute_copper"])
})

ServerEvents.tags('fluid', event => {
    event.add("tfc:usable_in_wooden_bucket",["immersiveengineering:redstone_acid"])
    event.add("tfc:usable_in_pot",["immersiveengineering:redstone_acid"])
})

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.data.IData;
import crafttweaker.api.fluid.FluidIngredient;
import crafttweaker.api.util.random.Percentaged;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.bracket.BracketHandlers;
import crafttweaker.api.recipe.MirrorAxis;
import mods.jeitweaker.Jei;

craftingTable.removeByInput(<item:immersiveengineering:hammer>);

craftingTable.remove(<item:immersiveengineering:cloche>);
craftingTable.addShaped("handcrafted_cloche", <item:immersiveengineering:cloche>,[
    [<tag:items:forge:glass_panes/colorless>,<tag:items:forge:light_bulbs>,<tag:items:forge:glass_panes/colorless>],
    [<tag:items:forge:glass_panes/colorless>,<item:firmalife:large_planter>,<tag:items:forge:glass_panes/colorless>],
    [<item:tfc_ie_addon:treated_wood_lumber>,<item:immersiveengineering:component_electronic_adv>,<item:tfc_ie_addon:treated_wood_lumber>]]);


craftingTable.remove(<item:immersiveengineering:light_bulb>);
craftingTable.addShaped("handcrafted_incandescent_light_bulb", <item:immersiveengineering:light_bulb>,[
    [<item:minecraft:air>,<tag:items:tfc:glass_bottles>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:kubejs:ashen_string>,<item:minecraft:air>],
    [<tag:items:forge:shiny_foil>,<item:minecraft:air>,<tag:items:forge:wires/copper>]]);

craftingTable.remove(<item:immersiveengineering:watermill>);

craftingTable.remove(<item:immersiveengineering:windmill_blade>);

craftingTable.remove(<item:immersiveengineering:windmill>);

craftingTable.remove(<item:immersiveengineering:dynamo>);

craftingTable.remove(<item:immersiveengineering:hemp_fabric>);


craftingTable.remove(<item:immersiveengineering:furnace_heater>);
craftingTable.addShaped("handcrafted_external_heater", <item:immersiveengineering:furnace_heater>,[
    [<tag:items:forge:wires/brass>,<tag:items:forge:wires/brass>,<tag:items:forge:wires/brass>],
    [<item:embers:superheater>,<item:immersiveengineering:coil_lv>,<item:embers:superheater>],
    [<item:create:andesite_alloy>,<item:create:andesite_alloy>,<item:create:andesite_alloy>]]);      


craftingTable.remove(<item:immersiveengineering:connector_lv_relay>);
craftingTable.addShaped("handcrafted_connector_lv_relay", <item:immersiveengineering:connector_lv_relay>, [
    [<item:firmaciv:copper_bolt>],
    [<tag:items:minecraft:terracotta>]]);

craftingTable.remove(<item:immersiveengineering:connector_lv>);
craftingTable.addShaped("handcrafted_connector_lv", <item:immersiveengineering:connector_lv>, [
    [<item:firmaciv:copper_bolt>],
    [<item:kubejs:ceramic_insulator>]]);

craftingTable.remove(<item:immersiveengineering:wire_copper>);
<recipetype:createaddition:rolling>.remove(<item:immersiveengineering:wire_copper>);
<recipetype:createaddition:rolling>.addJsonRecipe("rolled_create_wire_copper", {
	"type":"createaddition:rolling",
	"input": {
      	"tag": "forge:rods/copper"
	},
	"result": {
		"item": "immersiveengineering:wire_copper",
		"count": 2
	}
});        

<recipetype:tfc:anvil>.remove(<item:tfc_ie_addon:tool_head/ie_hammer>);
<recipetype:tfc:anvil>.addJsonRecipe("anvil_tool_head_ie_hammer", {
  "type": "tfc:anvil",
  "input": {
    "item": "tfc_ie_addon:metal/double_ingot/lead"
  },
  "result": {
    "item": "tfc_ie_addon:tool_head/ie_hammer"
  },
  "tier": 2,
  "rules": [
    "upset_any",
    "hit_not_last",
    "draw_second_last"
  ]
});

craftingTable.remove(<item:immersiveengineering:cokebrick>);
craftingTable.addShaped("handcrafted_cokebrick",<item:immersiveengineering:cokebrick>, [
    [<tag:items:forge:clay>,<tag:items:forge:dusts/ash>,<tag:items:forge:clay>],
    [<tag:items:forge:dusts/ash>,<item:tfc:alabaster/bricks>,<tag:items:forge:dusts/ash>],
    [<tag:items:forge:clay>,<tag:items:forge:dusts/ash>,<tag:items:forge:clay>]]);




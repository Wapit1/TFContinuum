import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.data.IData;
import crafttweaker.api.fluid.FluidIngredient;
import crafttweaker.api.util.random.Percentaged;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.bracket.BracketHandlers;
import crafttweaker.api.tag.manager.ITagManager;

craftingTable.remove(<item:tempad:tempad>);
craftingTable.addShaped("handcrafted_tempad", <item:tempad:tempad>, [
    [<item:tis3d:display_module>,<item:sgjourney:materialization_crystal>,<item:embers:dawnstone_ingot>],
    [<item:tis3d:keypad_module>,<item:sgjourney:reaction_chamber>,<item:railcraft:invar_ingot>],
    [<item:sgjourney:memory_crystal>,<item:ae2:fluix_crystal>,<item:immersiveengineering:ingot_electrum>]
    ]);

<recipetype:immersiveengineering:blueprint>.remove(<item:immersiveengineering:electron_tube>);
craftingTable.addShaped("handcrafted_electron_tube", <item:immersiveengineering:electron_tube>, [
    [<item:minecraft:air>,<item:kubejs:casing_electron_tube>,<item:minecraft:air>],
    [<item:immersiveengineering:stick_aluminum>,<item:tfc:metal/sheet/gold>,<item:railcraft:nickel_electrode>],
    [<item:immersiveengineering:wire_copper>,<item:kubejs:ceramic_insulator>,<item:immersiveengineering:wire_copper>]
    ]);

craftingTable.remove(<item:sgjourney:reaction_chamber>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("reaction_chamber_mechanical_crafting", {
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "key": {
    "A": { 
      "item": "embers:archaic_bricks"
    },
    "C": {
      "item": "immersiveengineering:concrete_leaded"
    },
    "B": {
      "item": "immersiveengineering:blastbrick_reinforced"
    },
    "N": {
    "item": "sgjourney:pure_naquadah"
    }
  },
  "pattern": [
    "AAAAAAA",
    "ACCCCCA",
    "ACBBBCA",
    "ACBNBCA",
    "ACBBBCA",
    "ACCCCCA",
    "AAAAAAA"
  ],
  "result": {
    "count": 1,
    "item": "sgjourney:reaction_chamber"
  }
});  
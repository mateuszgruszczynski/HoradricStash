// Horadric Stash Mod for D2RMM

// Copy sprite files
D2RMM.copyFile(
  'HoradricStash.mpq/data/hd/global/ui/panel/stash',
  'hd/global/ui/panel/stash',
  true
);

// Copy layout JSON files
D2RMM.copyFile(
  'HoradricStash.mpq/data/global/ui/layouts/bankexpansionlayouthd.json',
  'global/ui/layouts/bankexpansionlayouthd.json',
  true
);

D2RMM.copyFile(
  'HoradricStash.mpq/data/global/ui/layouts/bankoriginallayouthd.json',
  'global/ui/layouts/bankoriginallayouthd.json',
  true
);

// Extend stash grid in inventory txt
const inventoryFilename = 'global\\excel\\inventory.txt';
const inventory = D2RMM.readTsv(inventoryFilename);
inventory.rows.forEach((row) => {
  const id = row.class;
  if (
    id === 'Bank Page 1' ||
    id === 'Big Bank Page 1' ||
    id === 'Bank Page2' ||
    id === 'Big Bank Page2'
  ) {
    row.gridX = 16;
    row.gridY = 16;
  }
});
D2RMM.writeTsv(inventoryFilename, inventory);


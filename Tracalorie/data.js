// Item Controller
const ItemCtrl = (function (storage) {
    // Item Constructor
    class Item {
        constructor(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
    }

    const generateUniqueId = function () {
        return Math.floor(Math.random() * (9999999999) + 10000000000);
    };

    // Data Structure / State
    const data = {
        items: storage.loadItems(),
        currentItem: null,
        totalCalories: 0
    }

    // Public methods
    return {
        getItemById: function (id) {
            return data.items.find(item => item.id === id);
        },
        addItem: function (name, calories) {
            const item = new Item(generateUniqueId(), name, parseInt(calories));
            data.items.push(item);
            storage.saveItem(item);
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        updateCurrentItem: function (name, calories) {
            data.currentItem.name = name;
            data.currentItem.calories = parseInt(calories);
            const index = data.items.findIndex(item => item.id === data.currentItem.id);
            data.items[index] = data.currentItem;
            storage.updateItem(data.currentItem);
            data.currentItem = null;
        },
        deleteCurrentItem: function () {
            data.items = data.items.filter(item => item.id !== data.currentItem.id);
            storage.deleteItem(data.currentItem.id);
            data.currentItem = null;
        },
        getItems: function () {
            return data.items;
        },
        deleteItems: function () {
            storage.deleteItems();
            data.items = [];
        },
        logData: function () {
            return data;
        },
        getTotalCalories: function () {
            return data.totalCalories =
                data.items
                    .map(item => item.calories)
                    .reduce((a, b) => a + b, 0);
        }
    }
})(new StorageCtrl);
// App Controller
const App = (function (ItemCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function () {
        const UISelectors = UICtrl.getSelectors();

        // Edit item event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // Back event
        document.querySelector(UISelectors.backBtn).addEventListener('click', itemBackSubmit);
      
        // Clear all event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllSubmit);
    }

    const itemEditClick = function (e) {
        if (e.target.classList.contains('edit-item')) {
            var id = parseInt(e.target.parentNode.parentNode.id.replace(/item-/g, ''));
            const item = ItemCtrl.getItemById(id);
            ItemCtrl.setCurrentItem(item);
            UICtrl.showEditState(item.name, item.calories);
        }
        e.preventDefault();
    }

    const itemAddSubmit = function (e) {
        // Get form input
        const input = UICtrl.getItemInput();
        if (input.name && input.calories !== '') {
            ItemCtrl.addItem(input.name, input.calories);
            renderScreen();
        }
        e.preventDefault();
    }

    const itemUpdateSubmit = function (e) {
        // Get form input
        const input = UICtrl.getItemInput();
        if (input.name && input.calories !== '') {
            ItemCtrl.updateCurrentItem(input.name, input.calories);
            renderScreen();
        }
        e.preventDefault();
    }

    const itemDeleteSubmit = function (e) {
        ItemCtrl.deleteCurrentItem();
        renderScreen();
        e.preventDefault();
    }

    const itemBackSubmit = function (e) {
        UICtrl.clearEditState();
        e.preventDefault();
    }

    const clearAllSubmit = function (e) {
        ItemCtrl.deleteItems();
        renderScreen();
        e.preventDefault();
    }

    const renderScreen = function () {
        UICtrl.clearEditState();
        const items = ItemCtrl.getItems();
        if (items.length === 0) {
            UICtrl.hideList();
        } else {
            UICtrl.showList();
            UICtrl.populateItemList(items);
        }
        UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());
    }

    // Public methods
    return {
        init: function () {
            renderScreen();
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

App.init();
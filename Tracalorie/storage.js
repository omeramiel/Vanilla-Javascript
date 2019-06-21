class StorageCtrl {

    loadItems() {
        let items = localStorage.getItem('items');
        if(items !== null && items !== 'undefined') {
            return JSON.parse(localStorage.getItem('items'));
        } else {
            return [];
        }
    }

    saveItem(item) {
        const items = this.loadItems();
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }

    updateItem(updatedItem) {
        let items = this.loadItems();
        items.forEach((item, index) => {
            if (updatedItem.id === item.id) {
                items.splice(index, 1, updatedItem);
            }
        });
        localStorage.setItem('items', JSON.stringify(items));
    }

    deleteItem(id) {
        let items = this.loadItems();
        items = items.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(items));
    }

    deleteItems() {
        localStorage.removeItem('items');
    }
}
// UI Controller
const UICtrl = (function () {

    const UISelectors = {
        itemList: '#item-list',
        inputName: '#item-name',
        inputCalories: '#item-calories',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        totalCalories: '.total-calories'
    }

    const addListItem = function (item) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.id = `item-${item.id}`;
        li.innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>    
        `;
        document.querySelector(UISelectors.itemList).appendChild(li);
        // document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    }

    // Public methods
    return {
        getSelectors: function () {
            return UISelectors;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.inputName).value,
                calories: document.querySelector(UISelectors.inputCalories).value
            }
        },
        populateItemList: function (items) {
            document.querySelector(UISelectors.itemList).innerHTML = '';
            items.forEach(item => {
                addListItem(item);
            });
        },
        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'block';
        },
        clearForm: function () {
            document.querySelector(UISelectors.inputName).value = '';
            document.querySelector(UISelectors.inputCalories).value = '';
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function () {
            this.clearForm();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function (name, calories) {
            document.querySelector(UISelectors.inputName).value = name;
            document.querySelector(UISelectors.inputCalories).value = calories;
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        }
    }
})();

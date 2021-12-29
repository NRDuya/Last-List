const ValidationModel = require('../models/Validation');
const BudgetCheck = {};

BudgetCheck.validCategory = (category) => {
    if (category.length > 60) {
        return false;
    }
    return true;
}

BudgetCheck.validExpense = (expense) => {
    const expense_ = expense.toString();
    if (expense_.length > 13) return false;
    const regexp = /^\d+(\.\d{1,2})?$/;
    return regexp.test(expense_);
}

BudgetCheck.validUserId = async (userId) => {
    const userIdExists = ValidationModel.userIdExists(userId);

    if(userIdExists && typeof userId === 'number'){
        return true;
    }
    return false;
}

BudgetCheck.validMainBudgetId = async (budgetId) => {
    const mainBudgetIdExists = ValidationModel.mainBudgetIdExists(budgetId);

    if(mainBudgetIdExists && typeof budgetId === 'number'){
        return true;
    }
    return false;
}

module.exports = BudgetCheck;

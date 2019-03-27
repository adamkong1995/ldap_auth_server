// Task List bootstrap table initiation

// test json data
const jsonData = [{'name': '05Deal tax matter_Tax advice_Project', 'group':'Investment Support', 'subGroup':'Deal Tax Matter', 'frequency':'Project', 'keywords':'Tax advice', 'description':'it is a tax advice task'}, {'name': '05Tax - Inv or Fund_COPT1 liquidation_Project', 'group':'Investment Support', 'subGroup':'Tax - Inv or Fund', 'frequency':'Project', 'keywords':'COPT1 liquidation', 'description':'it is a liquidation task'}, {'name': '06Compliance checking_Lippo checking_AdHocOneOff', 'group':'L&C', 'subGroup':'Compliance checking', 'frequency':'AdHocOneOff', 'keywords':'Lippo checking', 'description':'it is a lippo task'}, {'name': '08Valn Mtg_Valn mtg_Project', 'group':'Investment valuations and fund audits', 'subGroup':'Valn Mtg', 'frequency':'Project', 'keywords':'Valn mtg', 'description':'it is a valn task task'}, {'name': '09ASM books_2018Q3 Mgt Rpt_Perpetual', 'group':'Group acctg/spv’s mgt', 'subGroup':'ASM books', 'frequency':'Perpetual', 'keywords':'2018Q3 Mgt Rpt', 'description':'it is a mgt rpt task'}]

document.addEventListener("DOMContentLoaded", () => {
    $('#taskList').bootstrapTable({
        data: jsonData
    });
});
// Given data
const arr = [
  {bankCode: 'SP-0329', balance_InOut: 500000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-1234', balance_InOut: 750000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-5678', balance_InOut: 300000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-5678', balance_InOut: 450000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-1234', balance_InOut: 600000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-8765', balance_InOut: 850000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-1234', balance_InOut: 950000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-5678', balance_InOut: 100000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-0329', balance_InOut: 200000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-0329', balance_InOut: 400000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-0329', balance_InOut: 650000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-1234', balance_InOut: 550000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-5678', balance_InOut: 250000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-4321', balance_InOut: 700000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-8765', balance_InOut: 300000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-0329', balance_InOut: 200000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-1234', balance_InOut: 750000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-5678', balance_InOut: 500000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-4321', balance_InOut: 150000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-8765', balance_InOut: 900000, transactionType: 'Dana Keluar'}
];

function groupByBankCode() {
  // Initialize key of transaction types
  const trxType = ['danamasuk', 'danakeluar'];

  // Transform array into an object consist of transactions grouped by bankCode
  let result = arr.reduce((trx, { bankCode, balance_InOut, transactionType }) => {
    // If new bankCode not found in existing group
    if (!trx[bankCode]) {
      // Create a new group of bankCode with transaction value of 0
      trx[bankCode] = { totalDanaMasuk: 0, totalDanaKeluar: 0 };
    }

    // Check transaction type
    if (transactionType.replace(/\s/g, '').toLowerCase() === trxType[0]) {
      // If income then summarize
      trx[bankCode].totalDanaMasuk += balance_InOut;
    } else if (transactionType.replace(/\s/g, '').toLowerCase() === trxType[1]) {
      // If outcome then summarize
      trx[bankCode].totalDanaKeluar += balance_InOut;
    }

    return trx;
  }, {});

  return result;
}

// module.exports = groupByBankCode;
console.log(groupByBankCode());

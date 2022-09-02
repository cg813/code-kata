import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createApplication, submitApplication, getBalanceSheet } from 'services/loan.service';
import { Sheet } from 'types/loan.types';

const Home = () => {
  const [applicationId, setApplicationId] = useState<string>("");
  const [provider, setProvider] = useState<string | null>(null);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [balanceSheet, setBalanceSheet] = useState<Sheet[]>([]);

  const handleCreate = async () => {
    const application = await createApplication();
    setApplicationId(application.applicationId);

    // should selected accounting provider
    const accountingProvider = "user1234";
    setProvider(accountingProvider);
    const sheet = await getBalanceSheet(accountingProvider);
    setBalanceSheet(sheet);
  }

  const handleSubmit = async () => {
    try {
      const data = {
        applicationId,
        userId: provider,
        loanAmount: loanAmount
      }
      const response = await submitApplication(data);
      console.log(response)
      toast("Submitted successfully");
      setTimeout(() => {
        toast("Approved");
      }, 1000);
    } catch(err) {
      console.log(err)
      toast("Something went wrong!");
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {applicationId == "" && (
        <button
          className='border p-5 rounded bg-purple-800 text-white'
          onClick={handleCreate}
        >
          Start loan
        </button>
      )}

      {applicationId != "" && (
        <div>
          <div className='my-5'>
            <label className='mr-5 font-bold'>Loan Amount</label>
            <input
              type='number'
              className='border border-purple-900 py-1 px-3'
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>
          <div className='my-5'>
            <label className='mr-5 font-bold'>Accounting Provider</label>
            <span>{provider}</span>
          </div>

          {balanceSheet.map(el => (
            <div className='flex'>
              <div className='mr-3'>{el.year}</div>
              <div className='mr-3'>{el.month}</div>
              <div className='mr-3'>{el.profitOrLoss}</div>
              <div className='mr-3'>{el.assetsValue}</div>
            </div>
          ))}
          
          <button
            className='border px-5 py-2 mt-10 rounded bg-purple-800 text-white float-right'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
    )
}

export default Home;
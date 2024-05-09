 import PropTypes from 'prop-types';
export default function Form({handleSubmit,values,setValues}) {
  return (
    
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
    <div className="mb-5">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center mt-24 mb-8 font-serif tracking-wider text-xl">Hey! Start Entering <span className="text-indigo-500">Values</span></label>
        {/* <input type="text"  value={values} onChange={(e) => setValues(e.target.value)} className="bg-indigo-50 border border-indigo-600  
         text-indigo-600 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400
          dark:text-white   dark:focus:border-indigo-500 border border-indigo-500 focus:border-indigo-500" placeholder="Enter Values Having Comma Seperated!!"   /> */}
    <input
  type="text"
  value={values}
  onChange={(e) => setValues(e.target.value)}
  className=" border border-indigo-500 text-grey-600 font-sans text-sm rounded-lg focus:outline-indigo-500 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white"
  placeholder="Enter Values Having Comma Separated!!"
/>

    </div>
    <div className="text-center">
    <button type="submit" className="text-white font-sans  bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:border-indigo-700 focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Submit</button>
    </div>
    </form> 
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values:PropTypes.string.isRequired,
  setValues:PropTypes.string.isRequired
};





/*  <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter values separated by commas"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form> */
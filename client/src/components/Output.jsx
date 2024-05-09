import PropTypes from 'prop-types';
export default function Output({result}) {
  return (
    <div className="flex justify-center items-center mt-7 ">
  <table className="border-collapse border border-indigo-400 rounded-lg">
    <thead>
      <tr className="bg-indigo-300 transition-colors duration-300 hover:bg-indigo-200">
        <th className="px-4 py-2 border border-indigo-400">Value</th>
        <th className="px-4 py-2 border border-indigo-400">Output</th>
        <th className="px-4 py-2 border border-indigo-400">Divisions</th>
      </tr>
    </thead>
    <tbody>
      {result.map((item, index) => (
        <tr
          key={index}
          className="hover:bg-indigo-100 transition-colors duration-300"
        >
          <td className="px-4 py-2 border border-indigo-400">{item.value}</td>
          <td className="px-4 py-2 border border-indigo-400">{item.output}</td>
          <td className="px-4 py-2 border border-indigo-400">
            {item.divisions && item.divisions.length > 0 && (
              <ul>
                {item.divisions.map((division, idx) => (
                  <li key={idx}>{division}</li>
                ))}
              </ul>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}
Output.propTypes = {
  result: PropTypes.array.isRequired
};


/*    <div>
        <ul>
        {result.map((item, index) => (
          <li key={index}>
            Value: {item.value}, Output: {item.output}
            {item.divisions && item.divisions.length > 0 && (
              <ul>
                {item.divisions.map((division, idx) => (
                  <li key={idx}>{division}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div> */
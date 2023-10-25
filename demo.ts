async function displayValuesWithWait(value: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("The current value is: ", value);
      resolve();
    }, 1000);
  });
}

async function doIt(value: number) {
  console.log("About to run displayValuesWithWait() process for value ", value);
  await displayValuesWithWait(value);
  console.log("Finished displayValuesWithWait() for value ", value);
}

async function valueLogger() {
  const values = [1, 2, 3, 4, 5];

  console.log("Starting to display values");
  values.forEach(doIt);
  console.log("Finished displaying values");

  console.log("--------------------------------");

  console.log("New Trial, but correct");
  console.log("Starting to display values");
  for (let i = 0; i < values.length; i++) {
    await doIt(values[i]);
  }
  console.log("Finished displaying values");
}

valueLogger();

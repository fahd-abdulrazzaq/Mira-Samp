export async function fakeVerifyText(text) {
  await new Promise((res) => setTimeout(res, 1000));
  return {
    verified: text.length > 10 && !text.includes('fake'),
    evidence: 'Simulated proof of truth from Mira Network',
  };
}

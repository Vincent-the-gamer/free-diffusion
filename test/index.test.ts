import { test, expect } from "vitest"
import { checkStatus, freeDiffusion, refreshUniqueId } from "../src"

test("refresh unique id", async () => {
  const id = await refreshUniqueId();
  console.log(id)
  expect(id).toBeDefined();
})

test('generate image', async () => {
  const uniqueId = await refreshUniqueId();
  const recordUuid = await freeDiffusion({
    prompt: 'A cute bikini girl with a stylish body is standing on the beach',
    negativePrompt: 'no face, extra limbs, low quality',
    model: 'tamarin',
    size: '4:3',
    batchSize: 1,
    uniqueId
  });
  console.log('uniqueId: ', uniqueId)
  console.log('recordId: ', recordUuid)
  expect(recordUuid).toBeDefined();
})


test('check status', async () => {
  const status = await checkStatus("5c423a18229f475183f1f9a14e96cbd2", "58c7394a4d65d9a4f341c20f748a37e7");
  console.log(status)
  expect(status).toBeDefined();
})
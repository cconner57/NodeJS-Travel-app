describe('/bucketlist', async function () {
	test('GET a list of all markers', async () => {
		const response = await request(app).get(`/bucketlist`)
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(expect.any(Object));
	});
});

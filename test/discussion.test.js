describe('/discussion', async function () {
	test('GET a list post', async () => {
		const response = await request(app).get(`/discussion`)
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(expect.any(Object));
	});
});

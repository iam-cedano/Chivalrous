CREATE PROCEDURE wipe_database()
BEGIN
	DELETE FROM balances;
	DELETE FROM carts;
	DELETE FROM failed_jobs;
	DELETE FROM items;
	DELETE FROM job_batches;
	DELETE FROM jobs;
	DELETE FROM migrations;
	DELETE FROM orders;
	DELETE FROM personal_access_tokens;
	DELETE FROM providers_services;
	DELETE FROM service_details;
	DELETE FROM smm_panels_api_keys;
	DELETE FROM service_providers;
	DELETE FROM source_services;
	DELETE FROM services;
	DELETE FROM smm_panels;
	DELETE FROM users;
END


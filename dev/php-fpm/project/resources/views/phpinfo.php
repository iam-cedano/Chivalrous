<?php
$memcached = new Memcached();
$memcached->addServer('localhost', 11211); // Connect to Memcached server


var_dump($memcached->getVersion());
$key = 'my_data_key';
$value = 'This is some data to cache.';

// Set data in cache (with a 60-second expiration)
$memcached->set($key, $value, 60);

// Get data from cache
$cachedValue = $memcached->get($key);

if ($cachedValue) {
    echo "Data retrieved from cache: " . $cachedValue;
} else {
    echo "Data not found in cache.";
}

// Delete data from cache
$memcached->delete($key);
?>
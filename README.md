jQuery.dump
===========
The result will be equivalent to the PHP function print_r.
```
echo '<pre>' . print_r($data) . '</pre>';
```

USAGE: 
==========
```
<script>
	var data = [{'id':1,'name':'hello'},'world'];
	$('#element').dump(data);
</script>
```
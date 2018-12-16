<h1>Customer List</h1>
<table>
<thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    </tr>
</thead>
<tbody>
    @foreach($data as $customer)
    <tr>
        <td>{{ $customer->id_user }}</td>
        <td>{{ $customer->nama }}</td>
        <td>{{ $customer->email }}</td>
        <td>{{ $customer->ipk }}</td>
    </tr>
    @endforeach
</tbody>
</table>
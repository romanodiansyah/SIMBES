<!-- <img src="{{asset('logo-ipb.png')}}">
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
        </tr><tr>
        <td>{{ $customer->nama }}</td>
        <td>{{ $customer->email }}</td>
        <td>{{ $customer->ipk }}</td>
        <td>{{ $customer->fakultas }}</td>
        <td>{{ $customer->jurusan }}</td>
    </tr>
    @endforeach
</tbody>
</table> -->

<style>
    td {
        text-align: center;
        padding: 10px 0;
    }
    td:first-child {
        text-align: right !important;
    }
    td:last-child {
        text-align: left !important;
    }
</style>
 <body>
<<<<<<< HEAD
<!-- <img src="{{asset('logo-ipb.png')}}" align="right" width="90" height="90">
<h1>Formulir Beasiswa Institut Pertanian Bogor</h1> -->
=======
<!-- <img src="{{asset('logo-ipb.png')}}" align="right" width="90" height="90"> -->
<h1 style="text-align: center;">Formulir Beasiswa Institut Pertanian Bogor</h1><hr>
>>>>>>> 7c8410a7f3680eccedd5ccda7f89299dc5b437ac

<table style="width: 75%" align="center">
    <tbody>
    @foreach($data as $customer)
    <tr>
        <td style="text-align:center !important;" colspan="5">Data Pribadi<hr></td>
    </tr>
    <tr>
        <td>Nomor KTM</td>
        <td>:</td>
        <td colspan="3">{{ $customer->no_ktm }}</td>
    </tr>
    <tr>
        <td>Jenis Identitas</td>
        <td>:</td>
        <td colspan="3">{{ $customer->jenis_identitas }}</td>
    </tr>
    <tr>
        <td>Nomer Identitas</td>
        <td>:</td>
        <td colspan="3">{{ $customer->no_identitas }}</td>
    </tr>
    <tr>
        <td>Nama Lengkap</td>
        <td>:</td>
        <td colspan="3">{{ $customer->nama }}</td>
    </tr>
    <tr>
        <td>Jenis Kelamin</td>
        <td>:</td>
        <td colspan="3">{{ $customer->jenis_kelamin }}</td>
    </tr>
    <tr>
        <td>Alamat</td>
        <td>:</td>
        <td colspan="3">{{ $customer->alamat }}</td>
    </tr>


    <tr>
        <td style="text-align:center !important;" colspan="5">Data Akademik<hr></td>
    </tr>
    <tr>
        <td>Fakultas</td>
        <td>:</td>
        <td colspan="3">{{ $customer->fakultas }}</td>
    </tr>
    <tr>
        <td>Jurusan</td>
        <td>:</td>
        <td colspan="3">{{ $customer->jurusan }}</td>
    </tr>
    <tr>
        <td>IPK</td>
        <td>:</td>
        <td colspan="3">{{ $customer->ipk }}</td>
    </tr>


    <tr>
        <td style="text-align:center !important;" colspan="5">Kontak<hr></td>
    </tr>
    <tr>
        <td>Email</td>
        <td>:</td>
        <td colspan="3">{{ $customer->email }}</td>
    </tr>
    <tr>
        <td>Nomer Telepon</td>
        <td>:</td>
        <td colspan="3">{{ $customer->telepon }}</td>
    </tr>
    <tr>
        <td>Nomer Handphone</td>
        <td>:</td>
        <td colspan="3">{{ $customer->no_hp }}</td>
    </tr>
    </tbody>  
</table>
 </body>
    @endforeach

    
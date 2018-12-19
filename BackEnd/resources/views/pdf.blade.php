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

 <body>
<!-- <img src="{{asset('logo-ipb.png')}}" align="right" width="90" height="90">
<h1>Formulir Beasiswa Institut Pertanian Bogor</h1> -->

  <table width="50%" border="0" align="center" cellpadding="7">
<tbody>
@foreach($data as $customer)
   <tr>
    <td colspan="2">Data Pribadi<hr/></td>
   </tr>
   <tr>
    <td align="right">Nomer KTM:</td>
    <td>{{ $customer->no_ktm }}</td>
   </tr>
   <tr>
    <td align="right">Jenis Identitas:</td>
    <td>{{ $customer->jenis_identitas }}</td>
   </tr>
   <tr>
    <td align="right">Nomer Identitas:</td>
    <td>{{ $customer->no_identitas }}</td>
   </tr>
   <tr>
    <td width="50%" align="right">Nama Lengkap:</td>
    <td>{{ $customer->nama }}</td>
   </tr>
    <tr>
    <td align="right">Jenis Kelamin:</td>
    <td>{{ $customer->jenis_kelamin }}</td>
   </tr>
   </tr>
    <td align="right">Alamat:</td>
    <td>{{ $customer->alamat }}</td>
   </tr>


   <tr>
    <td colspan="2">Data Akademik<hr/></td>
   </tr>
   <tr>
    <td align="right">Fakultas:</td>
    <td>{{ $customer->fakultas }}</td>
   </tr>
   <tr>
    <td align="right">Jurusan:</td>
    <td>{{ $customer->jurusan }}</td>
   </tr>
   <tr>
   <tr>
    <td align="right">IPK:</td>
    <td>{{ $customer->ipk }}</td>


   <tr>
    <td colspan="2">Kontak<hr/></td>
   </tr>
      <tr>
    <td align="right">Email:</td>
    <td>{{ $customer->email }}</td>
   </tr>
   <tr>
    <td align="right">Nomer Telepon:</td>
    <td>{{ $customer->telepon }}</td>
   </tr>
   <tr>
    <td align="right">Nomer Handphone:</td>
    <td>{{ $customer->no_hp }}</td>
   </tr>
   </tbody>
  </table>
 </body>
    @endforeach


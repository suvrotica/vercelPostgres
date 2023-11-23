<script>
  export let data;
  console.log(data);
</script>

<h1>Gemstone Inventory</h1>

{#if data?.gemstones && data?.gemstones.length > 0}
  <table>
    <thead>
      <tr>
        <th>Gemstone ID</th>
        <th>Description</th>
        <th>Identification</th>
        <th>Origin</th>
        <th>Weight</th>
        <th>Length</th>
        <th>Width</th>
        <th>Height</th>
        <th>Cut</th>
        <th>Shape</th>
        <th>Color</th>
        <th>Additional Color</th>
        <th>Comments</th>
        <th>Report ID</th>
        <th>Report Number</th>
        <th>Report Date</th>
        <th>Report Title</th>
        <th>Laboratory Name</th>
        <th>Award Number</th>
        <th>QR Code</th>
        <th>Signature</th>
        <th>Barcode</th>
        <th>Report Verification URL</th>
      </tr>
    </thead>
    <tbody>
      {#each data.gemstones as gemstone}
        <tr>
          <td>{gemstone.gemstone_id}</td>
          <td>{gemstone.description}</td>
          <td>{gemstone.identification}</td>
          <td>{gemstone.origin}</td>
          <td>{gemstone.weight}</td>
          <td>{gemstone.length}</td>
          <td>{gemstone.width}</td>
          <td>{gemstone.height}</td>
          <td>{gemstone.cut}</td>
          <td>{gemstone.shape}</td>
          <td>{gemstone.color}</td>
          <td>{gemstone.additional_color}</td>
          <td>{gemstone.comments}</td>
          <td>{gemstone.report_id}</td>
          <td>{gemstone.report_number}</td>
          <td>{gemstone.report_date}</td>
          <td>{gemstone.report_title}</td>
          <td>{gemstone.laboratory_name}</td>
          <td>{gemstone.award_number}</td>
          <td>{gemstone.qr_code}</td>
          <td>{gemstone.signature}</td>
          <td>{gemstone.barcode}</td>
          <td>{gemstone.report_verification_url}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <h1>No gemstone data available</h1>
{/if}

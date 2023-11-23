<script>
  export let form;

  let showPassword = false;
  let showConfirm = false;

  let password = "";
  let confirm = "";

  let email;

  $: {
    if (email && form?.error) email.focus();
  }
  $: passError =
    password?.length && confirm?.length
      ? password !== confirm
        ? true
        : false
      : false;
</script>

<h1>Create Gemstone Entry</h1>
<div>
  <div>
    <form method="post" action="?/create">
      <!-- Gemstone Details Fields -->
      <div>
        <label for="description">Description</label><input
          id="description"
          type="text"
          name="description"
          required
        />
      </div>
      <div>
        <label for="identification">Identification</label><input
          id="identification"
          type="text"
          name="identification"
          required
        />
      </div>
      <div>
        <label for="origin">Origin</label><input
          id="origin"
          type="text"
          name="origin"
          required
        />
      </div>
      <div>
        <label for="weight">Weight</label><input
          id="weight"
          type="number"
          name="weight"
          required
        />
      </div>
      <div>
        <label for="length">Length</label><input
          id="length"
          type="number"
          name="length"
          required
        />
      </div>
      <div>
        <label for="width">Width</label><input
          id="width"
          type="number"
          name="width"
          required
        />
      </div>
      <div>
        <label for="height">Height</label><input
          id="height"
          type="number"
          name="height"
          required
        />
      </div>
      <div>
        <label for="cut">Cut</label><input
          id="cut"
          type="text"
          name="cut"
          required
        />
      </div>
      <div>
        <label for="shape">Shape</label><input
          id="shape"
          type="text"
          name="shape"
          required
        />
      </div>
      <div>
        <label for="color">Color</label><input
          id="color"
          type="text"
          name="color"
          required
        />
      </div>
      <div>
        <label for="additional_color">Additional Color</label><input
          id="additional_color"
          type="text"
          name="additional_color"
        />
      </div>
      <div>
        <label for="comments">Comments</label><input
          id="comments"
          type="text"
          name="comments"
        />
      </div>

      <!-- Gemstone Reports Fields -->
      <div>
        <label for="report_number">Report Number</label><input
          id="report_number"
          type="text"
          name="report_number"
          required
        />
      </div>
      <div>
        <label for="report_date">Report Date</label><input
          id="report_date"
          type="date"
          name="report_date"
          required
        />
      </div>
      <div>
        <label for="report_title">Report Title</label><input
          id="report_title"
          type="text"
          name="report_title"
          required
        />
      </div>
      <div>
        <label for="laboratory_name">Laboratory Name</label><input
          id="laboratory_name"
          type="text"
          name="laboratory_name"
          required
        />
      </div>
      <div>
        <label for="award_number">Award Number</label><input
          id="award_number"
          type="number"
          name="award_number"
          required
        />
      </div>
      <div>
        <label for="qr_code">QR Code</label><input
          id="qr_code"
          type="text"
          name="qr_code"
          required
        />
      </div>
      <div>
        <label for="signature">Signature</label><input
          id="signature"
          type="text"
          name="signature"
          required
        />
      </div>
      <div>
        <label for="barcode">Barcode</label><input
          id="barcode"
          type="text"
          name="barcode"
          required
        />
      </div>
      <div>
        <label for="report_verification_url">Report Verification URL</label
        ><input
          id="report_verification_url"
          type="url"
          name="report_verification_url"
          required
        />
      </div>

      <div><button type="submit">Create Entry</button></div>
    </form>
  </div>
</div>

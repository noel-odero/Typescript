<mxGraphModel>
  <root>
    <!-- Nodes -->
    <mxCell id="start" value="Start" style="ellipse;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="20" width="30" height="30"/>
    </mxCell>
    
    <mxCell id="login" value="Login" style="rounded=1;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="70" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="dashboard" value="Go to Dashboard" style="rounded=1;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="130" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="create_listing" value="Click 'Create Listing'" style="rounded=1;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="190" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="fill_form" value="Fill in Form" style="rounded=1;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="250" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="upload_img" value="Upload Image" style="rounded=1;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="310" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="click_post" value="Click 'Post'" style="rounded=1;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="370" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="validation" value="Backend Validation" style="rounded=1;whiteSpace=wrap;fillColor=#f5f5f5;" vertex="1">
      <mxGeometry x="100" y="430" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="save_db" value="Save to Database" style="rounded=1;whiteSpace=wrap;fillColor=#f5f5f5;" vertex="1">
      <mxGeometry x="100" y="490" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="success_msg" value="Display Success Message" style="rounded=1;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="550" width="120" height="40"/>
    </mxCell>
    
    <mxCell id="end" value="End" style="ellipse;whiteSpace=wrap;" vertex="1">
      <mxGeometry x="100" y="610" width="30" height="30"/>
    </mxCell>

    <!-- Arrows -->
    <mxCell id="arrow1" edge="1" source="start" target="login"/>
    <mxCell id="arrow2" edge="1" source="login" target="dashboard"/>
    <mxCell id="arrow3" edge="1" source="dashboard" target="create_listing"/>
    <mxCell id="arrow4" edge="1" source="create_listing" target="fill_form"/>
    <mxCell id="arrow5" edge="1" source="fill_form" target="upload_img"/>
    <mxCell id="arrow6" edge="1" source="upload_img" target="click_post"/>
    <mxCell id="arrow7" edge="1" source="click_post" target="validation"/>
    <mxCell id="arrow8" edge="1" source="validation" target="save_db"/>
    <mxCell id="arrow9" edge="1" source="save_db" target="success_msg"/>
    <mxCell id="arrow10" edge="1" source="success_msg" target="end"/>
  </root>
</mxGraphModel>
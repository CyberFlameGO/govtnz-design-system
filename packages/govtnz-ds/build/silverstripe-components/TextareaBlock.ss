<div class="g-textareaBlock-form-group"> 
  <label class="g-textareaBlock-label"<% if $id %> for="{$id}"<% end_if %>> 
    {$label}

  </label> 
  <span class="g-textareaBlock-hint"<% if $hintId %> id="{$hintId}"<% end_if %>> 
    {$hint}

  </span> 
  <textarea<% if $hintId %> aria-describedby="{$hintId}"<% end_if %> class="g-textareaBlock-textarea"<% if $id %> id="{$id}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $rows %> rows=""<% end_if %><% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $cols %> cols=""<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $spellCheck %> spellcheck="<% if $spellCheck %>undefined<% end_if %>"<% end_if %><% if $autoComplete %> autocomplete="{$autoComplete}"<% end_if %><% if $maxLength %> maxlength=""<% end_if %><% if $value %> value="{$value}"<% end_if %>/> 
</div>